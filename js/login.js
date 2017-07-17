var $formLogin = $('#login-form');
    var $formLost = $('#lost-form');
    var $formRegister = $('#register-form');
    var $divForms = $('#div-forms');
    var $modalAnimateTime = 300;
    var $msgAnimateTime = 150;
    var $msgShowTime = 2000;
$('#login_register_btn').click( function () { modalAnimate($formLogin, $formRegister) });
   $('#register_login_btn').click( function () { modalAnimate($formRegister, $formLogin); });
   $('#login_lost_btn').click( function () { modalAnimate($formLogin, $formLost); });
   $('#lost_login_btn').click( function () { modalAnimate($formLost, $formLogin); });
   $('#lost_register_btn').click( function () { modalAnimate($formLost, $formRegister); });
   $('#register_lost_btn').click( function () { modalAnimate($formRegister, $formLost); });


   function modalAnimate ($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height",$oldH);
        $oldForm.fadeToggle($modalAnimateTime, function(){
            $divForms.animate({height: $newH}, $modalAnimateTime, function(){
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }
