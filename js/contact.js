$(document).ready(function() {

  $("#contactsContainer").load("contacts.html", function() {

   $('#name').val(Cookies.get('name'));
    $('#email').val(Cookies.get('email'));
    $('#message').val(Cookies.get('message'));

    console.log($('#contactus'));
    $('#contactus').on('submit',function(event){

      event.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();
      var message= $('#message').val();
      var  alerts = false;



      if (name == "") {
        console.log("name is empty");
        $('#name').next('.alert').removeClass('hide').hide().slideDown("slow");
        alerts=true;
      } else {
        $('#name').next('.alert').slideUp();
      }

      if (email == "") {
        console.log("Email field is empty");
        $('#email').next('.alert').removeClass('hide').hide().slideDown("slow");
        alerts=true;
      } else {
        $('#email').next('.alert').slideUp();
      }

      if (message == "") {
        console.log("message field is empty");
        $('#message').next('.alert').removeClass('hide').hide().slideDown("slow");
        alerts=true;
      }

      else {
        $('#message').next('.alert').slideUp();
      }

    console.log(alerts);
    if (alerts== false){
      Cookies.set('name',name);
      Cookies.set('email', email);
      Cookies.set('message', message);
      $('#contactus').find('.form-group').slice(0, 3).slideUp();
      $('#success-msg').removeClass('hide').hide().slideDown("slow");
      $('#success-btn').removeClass("btn-primary").addClass("btn-success");

  }



    });
  });
});
