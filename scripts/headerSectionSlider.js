const headerSectionSlider = document.querySelector('.header-banner-sliders');
const slides = document.querySelectorAll('.header-banner-slide');
let i = 0; // index

function changeSlide() {
    i = (i + 1) % slides.length;
    // 4k = 33.333, //1440p = 35.1
    headerSectionSlider.style.transform = `translateX(-${i * 35.1}%)`;
}

setInterval(changeSlide, 3000);