$(document).ready(function() {
  function getData(url, count, search) {
    if (search) {
      $('#resultList').html("");
    }

    var keyword = $('.form-control').val();
    var template;
    var $resultList = $('#resultList');
    $.ajax('/result.html', {
      success: function(resultTemplate) {
        template = resultTemplate;
        return template;
      }
    });
    $.getJSON(url, {
        s: keyword
      })
      .done(function(response) {
        console.log(response);
        for (var i = 0; i < count; i++) {
          var resultELement = $(template);

            var result = {
              name: response.drinks[i].strDrink,
              thumbnail: response.drinks[i].strDrinkThumb,
              id: response.drinks[i].idDrink,
              date: response.drinks[i].dateModified,
              instructions: response.drinks[i].strInstructions,
              category: response.drinks[i].strCategory,
              acloholic: response.drinks[i].strAlcoholic,
              glass: response.drinks[i].strGlass,
              ingredients: {
                first: response.drinks[i].strIngredient1,
                second: response.drinks[i].strIngredient2,
                third: response.drinks[i].strIngredient3,
                fourth: response.drinks[i].strIngredient4,
                fifth: response.drinks[i].strIngredient5,
                sixth: response.drinks[i].strIngredient6,
                seventh: response.drinks[i].strIngredient7,
                eighth: response.drinks[i].strIngredient8
              }
            };
            var shownDrink = {
              propertys: {
                id: "<li> ID : <span>" + result.id + "</span></li>",
                date: "<li>Last date modified :<br> <span>" + result.date + "</span></li>",
                category: "<li>category : <span>" + result.category + "</span></li>",
                acloholic: "<li><span>" + result.acloholic + "</span></li>",
                glass: "<li><span>" + result.glass + "</span></li>"
              },
              ingredients: {
                first: "<li> 1 <span>" + result.ingredients.first + "</span></li>",
                second: "<li> 2 <span>" + result.ingredients.second + "</span></li>",
                third: "<li> 3 <span>" + result.ingredients.third + "</span></li>",
                fourth: "<li> 4 <span>" + result.ingredients.fourth + "</span></li>",
                fifth: "<li> 5 <span>" + result.ingredients.fifth + "</span></li>",
                sixth: "<li> 6 <span>" + result.ingredients.sixth + "</span></li>",
                seventh: "<li> 7 <span>" + result.ingredients.seventh + "</span></li>",
                eighth: "<li> 8 <span>" + result.ingredients.eighth + "</span></li>"
              }
            };


          function checkData() {
              if (result.thumbnail != null) {
                resultELement.find('img').attr('src', result.thumbnail);
              } else {
                resultELement.find('img').attr('src', 'images/cocktail.png');
              }
              $.each(shownDrink.propertys, function(key, value) {
                var $props = $(value);
                if ($props.find('span').text() != "null" && $props.find('span').text() != "") {
                  resultELement.find('#properties').append(value);
                }
              });
              $.each(shownDrink.ingredients, function(key, value) {
                var $ings = $(value);
                if ($ings.find('span').text() != "") {
                  resultELement.find('#ingredients').append($ings);
                }
              });
          }
          function updatePanalLinks() {
              var links = resultELement.find('a');
              var panals = resultELement.find('.collapse');
              $.each(links, function() {
                var linkID = $(this).attr('href');
                $(this).attr('href', linkID + i)
              });
              $.each(panals, function() {
                var panalID = $(this).attr('id')
                $(this).attr('id', panalID + i);
                $(this).removeClass('in')
              });
          }
          checkData();
          updatePanalLinks();
          resultELement.find('h3').text(result.name);
          resultELement.find('.instructions').text(result.instructions);
          resultELement.find('li').addClass('list-group-item');
          resultELement.fadeIn(1000).removeClass('hidden');
          $resultList.append(resultELement);
        }
      });
  }
  $(document).on('click', "#searchButton", function(e) {
    e.preventDefault();
    getData('http://www.thecocktaildb.com/api/json/v1/1/search.php', 4, true);

  });
  $(document).on('click', ".lucky", function(e) {
    e.preventDefault();
    getData('http://www.thecocktaildb.com/api/json/v1/1/random.php', 1, false);
  });
});
