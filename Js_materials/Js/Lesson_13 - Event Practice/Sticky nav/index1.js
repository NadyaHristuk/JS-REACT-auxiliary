let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let headerH = header.clientHeight;
function toggleMenu () {
    if (pageYOffset > headerH) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');        
    }
}
window.addEventListener('scroll',toggleMenu);
