// declaring the Cookies intit function
function initi_cookies() {
  Cookies.set('UserNameCookie', $('#register_username').val());
  Cookies.set('EmailCookie', $('#register_email').val());
  Cookies.set('PasswordCookie', $('#register_password').val());
}

//declaring a function to check if the user match the cookies we have
function checkLogin() {
  var CookieVar = Cookies.get();
  var usernameVar = $('#login_username').val();
  var passwordVar = $('#login_password').val();

  if (CookieVar.UserNameCookie==usernameVar && CookieVar.PasswordCookie == passwordVar) {
    console.log('user correct');
    Cookies.remove('loggedIn');
    Cookies.set('loggedIn', true);
  } else {
    Cookies.set('loggedIn', false);
    console.log('user incorrect');

  }
}

$(document).ready(function() {
  var $formLogin = $('#login-form');
  var $formLost = $('#lost-form');
  var $formRegister = $('#register-form');
  var $divForms = $('#div-forms');
  var $modalAnimateTime = 300;
  var $msgAnimateTime = 150;
  var $msgShowTime = 2000;
  // calling the login modal
  $('#login_register_btn').click(function() {
    modalAnimate($formLogin, $formRegister);
  });
  $('#register_login_btn').click(function() {
    modalAnimate($formRegister, $formLogin);
  });
  $('#login_lost_btn').click(function() {
    modalAnimate($formLogin, $formLost);
  });
  $('#lost_login_btn').click(function() {
    modalAnimate($formLost, $formLogin);
  });
  $('#lost_register_btn').click(function() {
    modalAnimate($formLost, $formRegister);
  });
  $('#register_lost_btn').click(function() {
    modalAnimate($formRegister, $formLost);
  });


  function modalAnimate($oldForm, $newForm) {
    var $oldH = $oldForm.height();
    var $newH = $newForm.height();
    $divForms.css("height", $oldH);
    $oldForm.fadeToggle($modalAnimateTime, function() {
      $divForms.animate({
        height: $newH
      }, $modalAnimateTime, function() {
        $newForm.fadeToggle($modalAnimateTime);
      });
    });
  }

  // calling the cookies init function
  $('#btn-register').on('click', initi_cookies);
  $('button').click('#btn-login', function(e) {
    console.log('clicked');
    e.preventDefault();
    checkLogin();
  });
});
