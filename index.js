const mobileNav = document.querySelector('.nav-btn');
const menu = document.querySelector('.navbar');
mobileNav.addEventListener('click', function() {
    menu.classList.add('open');
});