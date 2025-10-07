const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === i) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// autoplay com fade
setInterval(nextSlide, 5000);

showSlide(index);
