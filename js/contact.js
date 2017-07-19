$(document).ready(function() {

  $("#contactsContainer").load("contacts.html", function() {

    console.log($('#contactus'));
    $('#contactus').on('submit',function(event){
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message= $('#message').val();

      if (name == "") {
        console.log("name is empty");
        $('#name').next('.alert').removeClass('hide').hide().fadeIn("slow");
      } else {
        $('#name').next('.alert').fadeOut();

      }

      if (email == "") {
        console.log("Email field is empty");
        $('#email').next('.alert').removeClass('hide').hide().fadeIn("slow");
      } else {
        $('#email').next('.alert').fadeOut();
      }
      
      if (message == "") {
        console.log("message field is empty");
        $('#message').next('.alert').removeClass('hide').hide().fadeIn("slow");
      }
      else {
        $('#message').next('.alert').fadeOut();
      }
    });
  });
});
