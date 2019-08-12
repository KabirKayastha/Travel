$('.itinerary').on('click', function(){
    $(this).toggleClass('itinerary-opened');
    $(this).children("p.itinerary-desc").slideToggle('300');
});