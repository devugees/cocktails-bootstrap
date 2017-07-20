$(document).ready(function() {

  $("#navContainer").load("nav.html");
  $("#sliderContainer").load("slider.html");

  $(document).on('click', 'a.page-scroll', function(event) {
    var $ele = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($ele.attr('href')).offset().top - 60)
    }, 600);
    event.preventDefault();
  });
});
jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    var navbar = jQuery("#navContainer").offset().top;
    var scrollpos = jQuery(window).scrollTop();
    if (scrollpos >= navbar) {
      jQuery("nav").addClass("navbar-fixed-top");
    } else {
      jQuery("nav").removeClass("navbar-fixed-top");
    }
  });
});
