$(document).ready(function () {
    $('.scroll-news, .cricle-steve').click(function () {
        $(this).addClass('active');
        $('html, body').animate({scrollTop:$('#scroll-steve').position().top - 0}, 600);
    })
    $('.scroll-follow').click(function () {
        $(this).addClass('active');
        $('html, body').animate({scrollTop:$('#footer-background').position().top - 0}, 1600);
    });
    $('.scroll-contact').click(function () {
        $(this).addClass('active');
        $('html, body').animate({scrollTop:$('#background-contact').position().top - 0}, 1600);
    });
    $('.cricle').click(function () {
        $(this).addClass('active');
        $('html, body').animate({scrollTop:$('#scroll-obama').position().top - 0}, 600);
    });
});