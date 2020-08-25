const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.fading-links li');


// Toggle Nav
burger.addEventListener('click', () => {

    // Burger Animation
    burger.classList.toggle('toggle');

    // show the menu
    nav.classList.toggle('nav-active');
});


menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
})
