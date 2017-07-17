$('#btn_cocktail_search').on('click', function() {
  var key_word = $('input.form-control').val();
  var search_url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + key_word;
  //  console.log(search_url);
  $.ajax('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', {
    success: function(key_word_obj) {
    //  console.log(key_word_obj);
    //  var obj1 = JSON.parse(key_word_obj);
    //  console.log(obj1);
      jQuery.each(key_word_obj, function(index, value) {
        console.log(value[0]);
        console.log(value[0].strDrink);
        console.log(index);
      });
    }
  });
});
