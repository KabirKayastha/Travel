$('#secRespNavbar').click(function(e) {
    if (e.clientX < $(this).offset().left) {
        $(this).addClass('sec-nav-shown');
    }
});

$('#secRespNavbar .close-nav span').click(function(){
    $('#secRespNavbar').removeClass('sec-nav-shown');
});