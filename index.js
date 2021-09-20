const slides = document.getElementsByClassName('carousel-item')
const positions = document.getElementsByClassName('position')
let slidePosition = 0;
let carouselPosition = 0;
const totalSlides = slides.length;
const fullPosition = positions.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function hideCarouselPosition() {
    for (let position of positions) {
        position.classList.remove('active-position')
        position.classList.add('active-position-hidden')
    }
}

function moveToNextSlide() {
    hideAllSlides();
    hideCarouselPosition();
    
    if (slidePosition === totalSlides - 1
        &&
        carouselPosition === fullPosition - 1
        ) {
        slidePosition = 0;
        carouselPosition = 0;
    } else {
        slidePosition++;
        carouselPosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    positions[carouselPosition].classList.add("active-position");
}

function moveToPrevSlide() {
    hideAllSlides();
    hideCarouselPosition();
    
    if (slidePosition === 0
        &&
        carouselPosition === 0
        ) {
        slidePosition = totalSlides - 1;
        carouselPosition = fullPosition - 1;
    } else {
        slidePosition--;
        carouselPosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    positions[carouselPosition].classList.add("active-position");
}