$(document).ready(function () {
    var result;
    $.ajax("result.html", {
        success: function (data) {
            result = $(data);
        }
    });

    $('button').click(function () {
        var searchBar = $("input:text").val();
        $("#properties").empty()
        console.log(searchBar);
        $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchBar, function (data) {
            console.log(data);

            // 0. loop over each drink (data.drinks)
            //   1. change content result
            //   2. append to #appendspace
            for (i = 0; i < data.drinks.length; i++) {
                console.log(i);
                var drink = data.drinks[i];
                console.log(drink);
                var li = result.clone();
                li.find('#cocktailName').text(drink.strDrink);
                li.find('#properties').children("li:nth(2)").text(drink.strCategory);
                li.find('#properties').children("li:nth(3)").text(drink.idDrink);
                li.find('#ingredients').children("li:nth(0)").text(drink.strIngredient0);
                li.find('#ingredients').children("li:nth(1)").text(drink.strIngredient2);
                li.find('#ingredients').children("li:nth(2)").text(drink.strIngredient3);
                li.find('#ingredients').children("li:nth(3)").text(drink.strIngredient4);
                li.find('#ingredients').children("li:nth(4)").text(drink.strIngredient5);
                li.find('#ingredients').children("li:nth(5)").text(drink.strIngredient6);
                li.find('.instructions').text(drink.strInstructions);



                $("#appendspace").append(li);
            }


        });

    });
});