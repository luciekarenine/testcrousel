const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const setSlidePosition = (slide, index) => {
    slide.style.left = `${index * 100}%`; // Positionner chaque image (slide) horizontalement
};

slides.forEach(setSlidePosition);

// Fonction pour déplacer le carrousel
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`; // Déplacer le carrousel
    currentSlide.classList.remove('current-slide'); // Retirer la classe 'current-slide' de l'image actuelle
    targetSlide.classList.add('current-slide'); // Ajouter la classe 'current-slide' à la nouvelle image
};

// Fonction pour mettre à jour les points de navigation
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('active'); // Retirer l'état actif du point actuel
    targetDot.classList.add('active'); // Ajouter l'état actif au nouveau point
};

// Fonction pour avancer à l'image suivante
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0]; // Image actuelle
    const nextSlide = currentSlide.nextElementSibling || slides[0]; // Image suivante, ou retour à la première
    const currentDot = dotsNav.querySelector('.active'); // Point actuel
    const nextDot = currentDot.nextElementSibling || dots[0]; // Point suivant, ou retour au premier

    moveToSlide(track, currentSlide, nextSlide); // Déplacer le carrousel à l'image suivante
    updateDots(currentDot, nextDot); // Mettre à jour les points de navigation
});

// Fonction pour reculer à l'image précédente
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0]; // Image actuelle
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Image précédente, ou dernière image
    const currentDot = dotsNav.querySelector('.active'); // Point actuel
    const prevDot = currentDot.previousElementSibling || dots[dots.length - 1]; // Point précédent, ou dernier point

    moveToSlide(track, currentSlide, prevSlide); // Déplacer le carrousel à l'image précédente
    updateDots(currentDot, prevDot); // Mettre à jour les points de navigation
});
