$(document).ready(function() {
  $('#searchButton').on('click',function(){
    var keyword = $('.form-control').val();
    var $template ;
    var $resultList = $('#resultList');
    $.ajax('/result.html', {
        success: function(resultTemplate) {
          $template = $.parseHTML(resultTemplate);
          return $template;
        }
    });

    $.getJSON('http://www.thecocktaildb.com/api/json/v1/1/search.php?',{
      s:keyword
    })
    .done(function(response){
      //console.log(response);
      for (var i = 0 ; i < 5 ; i++) {
        var result = {
          name:response.drinks[i].strDrink,
          thumbnail:response.drinks[i].strDrinkThumb,
          id:response.drinks[i].idDrink
        }
          $resultList.append($template);
          console.log(i);
        }
    });
  });
});
