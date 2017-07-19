$(document).ready(function() {
$("#popularContainer").load("popular.html", function(){

$('.rating-tooltip').rating('rate', Cookies.get('rating'));

  $('#popularContainer').on('click',"a", function() {
     var titel_cocktail = $(this).find('h3').text();
          console.log(titel_cocktail);
     var hallo = $('#sliderContainer').find('input').val(titel_cocktail);
  });

  $('input.check').on('change', function () {
            alert('Rating: ' + $(this).val());
            Cookies.remove('rating');
            Cookies.set('rating',$(this).val());

          });


  $('.rating-tooltip').rating({
         extendSymbol: function (rate) {
           $(this).tooltip({
             container: 'body',
             placement: 'bottom',
             title: 'Rate ' + rate
           });
         }
       });


});

});
