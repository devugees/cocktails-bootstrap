$(document).ready(function() {
  var closed = true;

  $(document).on('click', '#nav-toggle', function() {

    var $nav = $('#navContainer');
    var $main = $('.main');
    if (closed) {
      $nav.removeClass('slideOutLeft')
      $nav.removeClass('hidden');
      $nav.addClass('slideInLeft');
      $main.css('margin-left', '14em');
      closed = false;
    } else {

      $nav.removeClass('slideInLeft');
      $nav.addClass('slideOutLeft');
      $main.css('margin-left', '0');
      closed = true;
    }

  });



});
