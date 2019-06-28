//owl carousel 
$('#gallery .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dotsEach: true,
    lazyLoad: true,

    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dragEndSpeed: 700,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        },
        1050:{
            items:4
        }
    }
});