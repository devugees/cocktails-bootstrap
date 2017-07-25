// declaring the Cookies intit function
function initi_cookies() {
  Cookies.set('UserNameCookie', $('#register_modal_username').val());
  Cookies.set('EmailCookie',    $('#register_email').val());
  Cookies.set('PasswordCookie', $('#register_password').val());
}

function nav_switch() {
  if (Cookies.get('loggedIn') === 'true') {
  $('#btn-nav-login').addClass('hidden');
  $('#btn-nav-logout').removeClass('hidden');
  $('#welcome_msg_anchor').append('<li id="welcome_msg_presentStatus" class="nav-item"><a class="nav-link">'+"Welcome "+ Cookies.get("UserNameCookie") + '</a></li>');
  } else {
    $('#btn-nav-logout').addClass('hidden');
    $('#btn-nav-login').removeClass('hidden');
    $('#welcome_msg_presentStatus').remove();
  }
}


//declaring a function to check if the user match the cookies we have
function checkLogin() {
  var CookieVar = Cookies.get();
  var usernameVar = $('#login_username').val();
  var passwordVar = $('#login_password').val();
  if (CookieVar.loggedIn === 'true') {
    nav_switch();
    $('#login-modal').modal('hide');
  } else {
    if (CookieVar.UserNameCookie == usernameVar && CookieVar.PasswordCookie == passwordVar) {
      console.log('user correct');
      Cookies.remove('loggedIn');
      Cookies.set('loggedIn', true);
      $('#login-modal').modal('hide');
      nav_switch();
    } else {
      Cookies.set('loggedIn', false);
      console.log('user incorrect');

    }
  }
}

function logOut_fun() {
  console.log('loged out function triggerd');
  Cookies.set('loggedIn', false);
  nav_switch();
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
  $(window).on('load', checkLogin);


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
  $(document).on('click','#btn-nav-logout',function(){
    console.log('btn log out clicked');
    logOut_fun();
  });
  //clicking on login function
  $('button').click('#btn-login', function(e) {
    console.log('btn login clicked');
    e.preventDefault();
    checkLogin();
  });


});
