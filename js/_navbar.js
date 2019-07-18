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

navbarAffixOptions = {
    rootMargin: "0px 0px -90% 0px", 
    threshold: 1
}

let navbarAffixObserver = new IntersectionObserver(function(entries, navbarAffixObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        entry.target.classList.toggle('navbar-fixed');
    });  
}, navbarAffixOptions);

navbarAffixObserver.observe(navbar);
