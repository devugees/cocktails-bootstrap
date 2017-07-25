$(document).ready(function() {
  $("#popularContainer").load("popular.html", function() {

    var ratingIn = $('.rating-tooltip');

    ratingIn.each(function(i) {
      $('.rating-tooltip').eq(i).rating('rate', Cookies.get('rating' + i));
    });

    $('#popularContainer').on('click', "a", function() {
      var titel_cocktail = $(this).find('h3').text();
      $('#searchBar').val(titel_cocktail);
    });

    $('input.check').on('change', function() {
      var rating = $(this).val();
      var index = $(this).data('rating-index');

      Cookies.set('rating' + index, rating);
    });


    $('.rating-tooltip').rating({
      extendSymbol: function(rate) {
        $(this).tooltip({
          container: 'body',
          placement: 'bottom',
          title: 'Rate ' + rate
        });
      }
    });
  });


  jQuery(window).scroll(function() {
    var scrollpos = jQuery(window).scrollTop();
    var screenHeigth = (screen.height)/2;
      console.log(screenHeigth);

    $('.inactive').each(function() {
      var positionImg = $(this).offset().top;

      if ((scrollpos + screenHeigth) >= positionImg) {
        $(this).removeClass("inactive");
      }
    });

  });




});
