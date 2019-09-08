import './style';

let hamburger = document.querySelector('.hamburger-menu');
let nav = document.querySelector('.nav');

function showMenu({
    target
}) {
    console.log('click');
    nav.classList.toggle('.nav--open');
}

hamburger.addEventListener('click', () => {
    console.log('click');
    nav.classList.toggle('.nav--open');
});