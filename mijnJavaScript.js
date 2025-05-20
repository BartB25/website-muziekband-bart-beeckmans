// menu open en dichtklappen
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// slideshow functionaliteit
const images = [
    'img/home/3.jpeg',
    'img/home/Orlan Artist pic.jpeg'
];

let currentIndex = 0;

function showNextImage() {
    const slideshowImage = document.getElementById('slideshow');

    // Start fade out
    slideshowImage.classList.add('fade-out');

    // Na de fade-out (500 ms), verander de afbeelding en fade weer in
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImage.src = images[currentIndex];

        // Fade back in
        slideshowImage.classList.remove('fade-out');
    }, 500);
}

// elke 1,5 seconde veranderen van foto
setInterval(showNextImage, 4000);




