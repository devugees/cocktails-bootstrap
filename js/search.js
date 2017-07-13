$(document).ready(function () {
    var result;
    $.ajax("result.html", {
        success: function (resultT) {
            result = $(resultT);
            console.log(result);
        }
    })
    $('#search_cocktail').click(function () {
        $('#results').empty();
        var val_search = $("#srch-term").val();
        $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/search.php", {
            s: val_search
        }, function (response) {
            console.log(response);
            var drinks = response.drinks;
            for (var i = 0; i < drinks.length; i++) {
                var li = result.clone();
                li.find('#cocktailName').text(drinks[i].strDrink);
                if (drinks[i].strDrinkThumb != null)
                    li.find('img').attr('src', drinks[i].strDrinkThumb);
                else {
                    li.find('img');
                }
                li.find('#avdd').text(drinks[i].strAlcoholic);
                li.find('#bvdsb').text(drinks[i].strCategory);
                li.find('#cbdsb').text(drinks[i].idDrink);

                li.find('.ing1').text(drinks[i].strIngredient1);
                li.find('.ing2').text(drinks[i].strIngredient2);
                li.find('.ing3').text(drinks[i].strIngredient3);
                li.find('.ing4').text(drinks[i].strIngredient4);

                li.find('.instructions').text(drinks[i].strInstructions);
                $('#results').append(li);
            }
        });

    });

});

