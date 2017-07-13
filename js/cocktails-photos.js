$(document).ready(function () {
    $.getJSON("http://www.thecocktaildb.com/api/json/v1/1/search.php? ", {
        tags: "cocktail",
        tagmode: "any",
        format: "json"

    })
        .done(function (response) {
            $("#cocktails").html(response);

        });


});