
$(document).ready(function() {
  $(function(){
    $("#navContainer").load("nav.html");
  });
  $(function(){
    $("#searchContainer").load("search.html");
  });
  $(function(){
    $("#sliderContainer").load("slider.html");
  });
  $(function(){
    $("#featuresContainer").load("features.html");
  });
  $(function(){
    $("#popularContainer").load("popular.html");
  });
  $(function(){
    $("#contactsContainer").load("contacts.html");
  });

  $(document).on('click','a.page-scroll', function(event) {

  var $ele = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($ele.attr('href')).offset().top - 60)
  }, 600);
  event.preventDefault();
});

});
