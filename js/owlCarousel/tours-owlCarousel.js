//owl carousel 
$('#tours .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    //autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            autoWidth: true,
        },
        600:{
            items:2,
            autoWidth: true,
        },
        1000:{
            items:3
        },
        1050:{
            items:3
        }
    }
});

// create unique id for each profile-desc class and i tag

// var container = document.getElementsByClassName('container');

var iconContainer = document.querySelectorAll('#tours .wrapper .card span.card-desc span.up-icon');
var profileDesc = document.querySelectorAll('#tours .wrapper .card span.card-desc');

var counter = 0;
function createIcon() {
    var icon = document.createElement('i'); 
    icon.setAttribute("class", 'fas fa-angle-up');
    icon.setAttribute("id", 'upIcon' + counter);
    return icon;
}

function profileDescId() {
    profileDesc[counter].id = 'CardDesc'+counter; 
}

function iconContainerId() {
    iconContainer[counter].id = 'upiconContainer'+counter; 
}

window.addEventListener('load', ()=>{
    for(i=0; i < iconContainer.length; i++) {
        profileDescId();
        iconContainerId();
        var create = $(createIcon());
        $(iconContainer[counter]).append(create);
        counter++
    }
});

//toggleing function


$('#tours .wrapper .card span.card-desc span.up-icon').click(function(){
    $('#'+this.parentNode.id).toggleClass('card-desc-active');
    $('#'+this.parentNode.id).toggleClass('card-desc-after');
    $('#'+this.firstChild.id).toggleClass('i-after');
    
});


//
var tourCards = document.querySelectorAll('#tours .wrapper .card');


