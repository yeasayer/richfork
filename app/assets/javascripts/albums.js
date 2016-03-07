function getQueryParams(qs) {
  qs = qs.split('+').join(' ');
  var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

$(document).on('ready page:load', function() {
  // Lock filter fields on submit
  $('#filter').submit(function() {
    $(this).find(':input').filter(function(){ return !this.value; }).attr('disabled', 'disabled');
    $('#rating').val(function(index, value) {
      return value.replace(';','-');
    });
    return true;
  });

  // Triple-state button for BNM selection
  $('#bnm-btn').click(function() {
    input = $('#bnm');
    switch (input.val()) {
      case '1':
        $(this).find('span').text('No Best New Music');
        input.val(0);
        break;
      case '0':
        $(this).find('span').text('Include Best New Music');
        input.val('');
        break;
      default:
        $(this).find('span').text('Only Best New Music');
        input.val(1);
        break;
    }
  });

  // Triple-state button for reissue selection
  $('#reissue-btn').click(function() {
    input = $('#reissue');
    switch (input.val()) {
      case '1':
        $(this).find('span').text('No Reissues');
        input.val(0);
        break;
      case '0':
        $(this).find('span').text('Include Reissues');
        input.val('');
        break;
      default:
        $(this).find('span').text('Only Reissues');
        input.val(1);
        break;
    }
  });

  // Send API requests for typeahead inputs
  if ($('#dash').length) {
    $.get('/api/artists.json', function(data){
        $('#artists-typeahead').typeahead({ source:data });
    },'json');

    $.get('/api/labels.json', function(data){
        $('#labels-typeahead').typeahead({ source:data });
    },'json');

    $('#dash').affix({
      offset: {
        top: $('.navbar-header').height()
      }
    });
  }

  // Draw range slider for rating filter
  $('#rating').ionRangeSlider({
    type: 'double',
    grid: false,
    min: 0,
    max: 10,
    from: from_rating,
    to: to_rating,
    step: 0.1,
    hide_min_max: true
  });

  // Parse rating range from params
  var from_rating = 0.0;
  var to_rating = 10.0;
  var query = getQueryParams(document.location.search);
  if (query.rating) {
    from_rating = +query.rating.split('-')[0];
    to_rating = +query.rating.split('-')[1];
  }

  // Dynamic user rating setter
  $(function() {
    $('.rating.user').mouseenter(function() {
      $(this).removeClass('dim');

      $(this).mousemove(function(e) {
        $(this).text(((this.offsetHeight - e.offsetY - 10) / this.offsetHeight * 10.0).toFixed(1));
      });

      $(this).mouseleave(function() {
        $(this).text('0.0');
        $(this).addClass('dim');
      });
    });

    $('.rating.user').mouseleave(function() {
      $(this).off('mousemove');
    });

    $('.rating.user').mousedown(function() {
      var rate = $(this).text();
      var album_id = $(this).closest('.card').data('album-id');
      $.ajax({
        url: '/api/rate/' + album_id,
        type: 'POST',
        data: 'rate=' + rate,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log('Can\'t rate album: ' + errorThrown);
        }
      });
    });

    $('.rating.user').mouseup(function() {
      $(this).off('mousemove');
      $(this).off('mouseleave');
      $(this).removeClass('dim');
    });
  });
});
