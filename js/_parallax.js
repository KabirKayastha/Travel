$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    $('.layer').each(function() {
        var layer = $(this);
        var dataSpeed = layer.data('speed');
        var offsetY = -(scrollTop * dataSpeed);
        var translate = 'translate3d(0, ' + offsetY + 'px, 0)';

        layer.css('transform', translate);
        layer.css('-webkit-transform', translate);
        
    });

    $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
  
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }     
    });

    $(".opacityAnim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();

        if (pos < winTop + 600) {
          $(this).addClass("opacity");
        }     
  });


});
