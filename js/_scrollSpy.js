//scrollSpy
let sections = document.querySelectorAll('.section');

const navMarker = document.getElementById('navMarker');
// let anchors = document.querySelectorAll('.navbar ul li a');



const scrollSpyOptions = {
    rootMargin: "-50% 0px" // !!! important -50% margin at top & bottom makes navMarker change smoother, this string only supports the value unit in either "px" or "%"
};

let scrollSpyObserver = new IntersectionObserver(function(entries, scrollSpyObserver){
    
    entries.forEach(entry => {
        var entryId = entry.target.getAttribute("id");
        if(!entry.isIntersecting){
            return;
        }

        // var marker = document.querySelector('.navbar ul li a[href="#top-destination"]');
        let marker = document.querySelector('.navbar ul li a[href="#'+ entryId +'"]');
        let markerParent = marker.parentNode;
        let markerParentWidth = markerParent.offsetWidth;
        let markerPosition = markerParent.getBoundingClientRect();
        let markerPositionLeft = markerPosition.left;
        
        navMarker.style.transform = 'translateX(' + markerPositionLeft + 'px)';
        navMarker.style.width = markerParentWidth + "px";
    });


},scrollSpyOptions);


sections.forEach(section => {
    scrollSpyObserver.observe(section);
});

