//variables
var lbClose = document.getElementById('lbClose');
    lightboxModal = document.getElementById('lightboxModal');
    modalImage = document.getElementById('modalImage');
    lbNext = document.getElementById('lbNext');
    lbPrev = document.getElementById('lbPrev');
    galleryImages = document.querySelectorAll('.modal-img');
    captionText = document.getElementById('captionText');
 
//close the modal
function closeModal(){
    lightboxModal.style.display = "none";
    document.body.style.overflow = "inherit";
}

//open the modal when clicked on gallery image 
function openModal(){
    lightboxModal.style.display = "block";
    modalImage.src = event.target.src;
    captionText.innerHTML = event.target.parentNode.lastElementChild.innerHTML;
    document.body.style.overflow = "hidden";
}


//next image
var currentImageIndex = 0;
function nextImage(){
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentImageIndex].src; 
    captionText.innerHTML = galleryImages[currentImageIndex].parentNode.lastElementChild.innerHTML;
    return galleryImages[currentImageIndex];
}

function prevImage(){
    if(currentImageIndex === 0){
        currentImageIndex = galleryImages.length;
    }
    currentImageIndex = currentImageIndex - 1;
    modalImage.src = galleryImages[currentImageIndex].src; 
    captionText.innerHTML = galleryImages[currentImageIndex].parentNode.lastElementChild.innerHTML;
    console.log(currentImageIndex);
    return galleryImages[currentImageIndex]; 
}

   
//enable the lightbox only on screen width greater than 768px
function mediaCheck(media){
    if(media.matches){
        return;
    }

    // event listeners
    lbClose.addEventListener('click', closeModal);
    lbNext.addEventListener('click', nextImage);
    lbPrev.addEventListener('click', prevImage);

    galleryImages.forEach(galleryImage => {
        galleryImage.addEventListener('click', openModal);
    });
}

var media = window.matchMedia("(max-width: 768px)");
mediaCheck(media);
media.addListener(mediaCheck);


