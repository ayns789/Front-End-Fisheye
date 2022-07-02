
const lightbox = document.querySelector('.lightbox');
const lightboxClose = document.querySelector('.lightbox__close');
const lightboxContainer = document.querySelector('.lightbox__container');
const lightboxNext = document.querySelector('.lightbox__next');
const lightboxPrev = document.querySelector('.lightbox__prev');

let selectedPhotographies = JSON.parse(localStorage.getItem("selectedWorksPhotograph"));
let mediaOpened = "";

function openLightbox() {
    const links = document.querySelectorAll('.media');
    links.forEach((link, index) => {
      link.addEventListener('click', () => {
        mediaOpened = index;
        bg_lightbox.style.display = 'block';
        affichageLightbox(selectedPhotographies[mediaOpened]);
      });
    });
  }

Lightbox.init();