source 'https://rubygems.org'

ruby '2.3.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.2.1'
# Use Puma as application server
gem 'puma', '~> 3.6'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Bootstrap as CSS framework
gem 'bootstrap-sass', '~> 3.3.5'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1'
# Use HAMLit for faster templates
gem 'hamlit', '~> 2.6'
# Use Mongo gem as Ruby driver for MongoDB
gem 'mongo', '~> 2.3.0'
# Use Mongoid as ODM for MongoDB
gem 'mongoid', '~> 5.1'
# Use Devise as authentication library
gem 'devise', '~> 3.5.2'
# Use Pundit for role-based authorization
gem 'pundit', '~> 1.1'
# Use Sidekiq as job queue for background processing
gem 'sidekiq', '~> 4.1.1'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster
gem 'turbolinks', '~> 2.5.3'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.3'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.1', group: :doc
# Use Nokogiri as HTML parser
gem 'nokogiri', '~> 1.6.6'
# Use Kaminari gem for pagination
gem 'kaminari', '~> 0.17'
# Kaminari adapter for Mongoid
gem 'kaminari-mongoid'
# Use Mongoid Slug as slug generator for beautiful URLs
gem 'mongoid-slug', '~> 5.1'
# Use Mongoid Enum for enum support
gem 'mongoid-enum', git: 'https://github.com/arteezy/mongoid-enum.git'
# Use Gravtastic gem to add Gravatar support
gem 'gravtastic'
# Use Simple Form gem to simplify form creation
gem 'simple_form'
# Use this gem to generate sitemap and ping search engines
gem 'sitemap_generator'
# Use Discogs Wrapper gem to easily interact with the Discogs API
gem 'discogs-wrapper'
# Use fog-aws as an interface to Amazon Web Services
gem 'fog-aws'
# Use TZInfo Data as data source for time zones
gem 'tzinfo-data'

group :development, :test do
  # Use RSpec for advanced testing
  gem 'rspec-rails', '~> 3.2'
  # Use Factory Girl as factories generator for specs
  gem 'factory_girl_rails', '~> 4.5'
  # Call 'binding.pry' anywhere in the code to stop execution and get a debugger console
  gem 'pry-byebug'
end

group :development, :deploy do
  # Use Capistrano for deployment
  gem 'capistrano', '~> 3.4.1'
  # Use Airbrussh to nicely format deployment log output
  gem 'airbrussh', require: false
  # Rails tasks for capistrano
  gem 'capistrano-rails', require: false
  # Bundler tasks for capistrano
  gem 'capistrano-bundler', require: false
  # Rbenv tasks for capistrano
  gem 'capistrano-rbenv', require: false
  # Puma tasks for capistrano
  gem 'capistrano3-puma', require: false
end

group :development do
  # Spring speeds up development by keeping your application running in the background
  gem 'spring'
  # This gem implements the rspec command for Spring
  gem 'spring-commands-rspec'
  # Use Rack Mini Profiler for advanced performance profiling
  gem 'rack-mini-profiler'
  # Use Bullet gem to find slow queries and unused eager loading
  gem 'bullet'
  # Use Pry as Rails console replacement
  gem 'pry-rails'
  # Use Awesome Print to make debugging more visually comprehensive
  gem 'awesome_print'
  # Use Better Errors gem to replace errors page
  gem 'better_errors'
  # Use binding_of_caller gem to enable live REPL on error pages
  gem 'binding_of_caller'
  # Use Quiest Assets to supress assets console logging
  gem 'quiet_assets'
end

group :test do
  # Use Faker gem to generate fake test data
  gem 'faker', '~> 1.4'
  # Use Capybara for integration specs
  gem 'capybara', '~> 2.4'
  # Use DatabaseCleaner to wipe DB before tests
  gem 'database_cleaner', '~> 1.5'
  # Use Launchy as helper to Capybara specs
  gem 'launchy', '~> 2.4'
  # Use Code Climate to measure test coverage and code quality
  gem 'codeclimate-test-reporter'
end

group :production do
  # 12 Factor gem for Heroku
  gem 'rails_12factor'
  # Add LogEntries log monitoring
  gem 'le'
  # Add Sentry for error reporting
  gem 'sentry-raven'
  # Use New Relic as monitoring service
  gem 'newrelic_rpm'
  # Use Skylight as alternative monitoring service
  gem 'skylight'
end
