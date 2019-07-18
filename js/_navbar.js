$('#resp-navbar #ham-menu-btn').click(function(){
    $('.fa-bars').toggleClass('bars-clicked');
    $('.fa-times').toggleClass('times-clicked');
    // $('#navbar').slideToggle();
    // $('affix #navbar').slideToggle();
    $('.nav-hidden').toggleClass('nav-shown');
    // $('#affix #navbar').toggleClass('navbar-toggled');
});

// affix

const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#logo');
const sectionsAll = document.querySelectorAll('.section-all');
let windowScroll = $(window).scrollTop();
let navScroll = $("#navbar").scrollTop();

// $(window).scroll(function(){
//     // if(windowScroll > navScroll){
//     //     console.log('blah');
//     //     $(navbar).addClass('navbar-fixed');
//     // }else
//      if(windowScroll > navScroll){
//         console.log("!blah");
//         $(navbar).addClass('navbar-fixed');
//     }
    
// });

navbarAffixOptions = {
    rootMargin: "-10% 0px -90% 0px", 
    threshold: 0
}

let navbarAffixObserver = new IntersectionObserver(function(entries, navbarAffixObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navbar.classList.remove('navbar-fixed');
            entry.target.style.paddingTop = "0px";
        }else{
            console.log(entry.target);
            navbar.classList.add('navbar-fixed');
            entry.target.style.paddingTop = navbar.clientHeight + "px";
        }
    });  
}, navbarAffixOptions);

sectionsAll.forEach(section => {
    navbarAffixObserver.observe(section);
});

