$('#ham-menu-btn').click(function(){
    $('.fa-bars').toggleClass('bars-clicked');
    $('.fa-times').toggleClass('times-clicked');
    // $('#navbar').slideToggle();
    // $('affix #navbar').slideToggle();
    $('#navbar').toggleClass('navbar-toggled');
    $('#affix #navbar').toggleClass('navbar-toggled');
});

$('#navbar ul').click(function(){
    // var xx = $(window).scrollTop();
    // $('.fa-bars').toggleClass('bars-clicked');
    // $('.fa-times').toggleClass('times-clicked');
    // $('#navbar').toggleClass('navbar-toggled');
    $('#affix #navbar').toggleClass('navbar-toggled');
    // $(window).scrollTop(xx-400);
});


// console.log(xx);