$(document).ready(function () {
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
    tags: 'ford',
    tagemode: 'any',
    format: 'json'
  })
    .done(function (response) {
      console.log(response);
      var imge = $(".carousel-inner").find('img');

      //console.log(imgLinks);
      //  console.log(img);
      /*  for(var i = 0;i <imge.length ;i++) {
          var imgLinks = response.items[i].media.m;
          //console.log(imgLinks);
          //.log();
          imge[i].src = imgLinks;
        }*/
    });
});

