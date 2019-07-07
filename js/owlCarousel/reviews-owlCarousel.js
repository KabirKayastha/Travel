//owl carousel 
$('#reviews .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    lazyLoad: true,
    dots:false,
    
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    dragEndSpeed: 700,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        },
        1050:{
            items:2
        }
    }
});