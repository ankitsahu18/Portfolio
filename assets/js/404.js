// Hamburger menu toggle (in case the navbar links are used elsewhere on the site)
const menuBtn = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

if (menuBtn && navbar) {
  menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  };
}

window.onscroll = () => {
  if (menuBtn && navbar) {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
  }
};
