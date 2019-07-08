$('#resp-navbar #ham-menu-btn').click(function(){
    $('.fa-bars').toggleClass('bars-clicked');
    $('.fa-times').toggleClass('times-clicked');
    // $('#navbar').slideToggle();
    // $('affix #navbar').slideToggle();
    $('.nav-hidden').toggleClass('nav-shown');
    // $('#affix #navbar').toggleClass('navbar-toggled');
});
