class DiscogsParserService
  def initialize(wrapper, num_threads = 2)
    @wrapper = wrapper
    @num_threads = num_threads
  end

  def parse(album)
    search = @wrapper.search("#{album[:artist].join(' ')} #{album[:title]}")
    return if search[:results].blank?
    search[:results].each do |result|
      if result[:type] == 'master' && result[:year] == album[:year].split('/').sort.last
        album[:discogs] = result
        Rails.logger.info "#{album[:artist].join(' / ')} - #{album[:title]}"
        album.save!
        break
      end
    end
  end

  def parse_by_year(year)
    Rails.logger.info "Parsing #{year} year!"
    Album.where(discogs: nil, year: year).each do |album|
      parse(album)
    end
  end

  def update_latest
    start = Date.today.beginning_of_year
    Rails.logger.info "Updating Discogs from #{start}!"
    Album.where(discogs: nil, date: { '$gte' => start }).each do |album|
      parse(album)
    end
  end

  def request_detailed_info
    Rails.logger.info 'Requesting detailed Discogs info...'
    Album.where('discogs.type' => 'master').each do |album|
      album[:discogs] = @wrapper.get_master_release(album[:discogs][:id])
      Rails.logger.info "#{album[:artist].join(' / ')} - #{album[:title]}"
      album.save!
    end
  end

  def queue_start
    years = Album.where(discogs: nil).distinct(:year)
    queue = Queue.new
    years.each { |year| queue.push(year) }

    threads = []
    @num_threads.times do
      threads << Thread.new do
        while (year = queue.pop(true) rescue nil)
          parse_by_year(year)
        end
      end
    end
    threads.map(&:join)
  end

  def thread_pool_start
    pool = Concurrent::FixedThreadPool.new(@num_threads)

    years = Album.where(discogs: nil).distinct(:year)
    years.each do |year|
      pool.post do
        parse_by_year(year)
      end
    end

    pool.shutdown
    pool.wait_for_termination
  end
end
