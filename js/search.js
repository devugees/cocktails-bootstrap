$(document).ready(function() {
  $('#searchButton').on('click', function() {
    $('#resultList').html("");
    var keyword = $('.form-control').val();
    var template;
    var $resultList = $('#resultList');
    $.ajax('/result.html', {
      success: function(resultTemplate) {
        template = resultTemplate;
        return template;
      }
    });
    $.getJSON('http://www.thecocktaildb.com/api/json/v1/1/search.php?', {
        s: keyword
      })
      .done(function(response) {
        console.log(response);
        for (var i = 0; i < 7; i++) {
          var result = {
            name: response.drinks[i].strDrink,
            thumbnail: response.drinks[i].strDrinkThumb,
            id: response.drinks[i].idDrink,
            date: response.drinks[i].dateModified,
            instructions: response.drinks[i].strInstructions,
            category: response.drinks[i].strCategory,
            ingredients: {
              first: response.drinks[i].strIngredient1,
              second: response.drinks[i].strIngredient2,
              third: response.drinks[i].strIngredient3,
              fourth: response.drinks[i].strIngredient4,
            }

          }
          var props = "<li>" + result.id + "</li><li>" + result.date + "</li><li>" + result.category + "</li>";
          var ings = "<li>" + result.ingredients.first + "</li><li>" + result.ingredients.second+ "</li><li>" + result.ingredients.third + "</li><li>" + result.ingredients.fourth + "</li>"
          var resultELement = $(template);
          resultELement.find('h2').text(result.name);
          if (result.thumbnail != null) {
            resultELement.find('img').attr('src', result.thumbnail);
          } else {
            resultELement.find('img').attr('src', 'images/cocktail.png');
          }
          resultELement.find('#properties').append(props);
          resultELement.find('#ingredients').append(ings);
          resultELement.find('.instructions').text(result.instructions);
          $resultList.append(resultELement);


        }


      });
  });
});
