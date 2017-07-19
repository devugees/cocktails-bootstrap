$(document).ready(function() {
  $('#popularContainer').on('click',"a", function() {
     var titel_cocktail = $(this).find('h3').text();
          console.log(titel_cocktail)
     var hallo = $('#sliderContainer').find('input').val(titel_cocktail);


  });


});
