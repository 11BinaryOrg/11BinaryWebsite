$(function () {

    $(window).on("load resize", function () {
        var height = window.innerHeight;
        $(".full-screen").css("height", height);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset:240
    });

    $("#send").click(function (event) {
        event.preventDefault();
        var name = $("#inputName").val();
        var email = $("#inputEmail").val();
        var phone = $("#inputPhone").val();
        
        if (name == '' || email == '' || phone == '') {
        alert("Hey, we can't contact you unless you give us your information, now can we? Now fill out the form!");
        
        } else {
            alert("Message Recieved from " + name + ", " + "email: " + email + ", " + "phone: " + phone);
        }
    });

    $('.navbar-header a, ul.nav a, .topIcon a, .linkButton a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
