// menu open en dichtklappen
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

//doorscrollen door carousel 
let scrollInterval;

function startScrolling(direction) {
    const track = document.getElementById("carouselTrack");
    scrollInterval = setInterval(() => {
        track.scrollBy({
            left: direction * 200, // kleine stapjes voor soepel scrollen
            behavior: 'auto'
        });
    }, 5); // elke 5ms
}

function stopScrolling() {
    clearInterval(scrollInterval);
}