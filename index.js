// ClassList - shows/gets classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

// Global Variables

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// Event listeners

navToggle.addEventListener('click', function() {
    if (nav.classList.contains('hidden')) {
        nav.classList.toggle('show-links');
        nav.classList.toggle('hidden')
    }
})