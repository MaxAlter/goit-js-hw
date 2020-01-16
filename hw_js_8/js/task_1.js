'use strict';

import items from './gallery-items.js';

const galleryItems = function(items) {
  items.forEach(item => {
    const row = `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${item.original}
  >
    <img
      class="gallery__image"
     src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
       width = 392px height = 240px
    />
  </a>
</li> `;

    document.querySelector('.js-gallery').insertAdjacentHTML('afterbegin', row);
  });
};

galleryItems(items);

let lightboxImage = document.querySelector('.lightbox__image');
const imageGallery = document.querySelector('.js-gallery');
let jslightBox = document.querySelector('.js-lightbox');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

let closeButton = document.querySelector(
  'button[data-action="close-lightbox"]',
);

const handleGallery = {
  openModalbox(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    const target = event.target;
    jslightBox.classList.add('is-open');
    lightboxImage.alt = target.alt;
    lightboxImage.src = target.dataset.source;
  },
  closeModalbox() {
    if (jslightBox.classList.contains('is-open')) {
      lightboxImage.alt = '';
      lightboxImage.src = '';
      jslightBox.classList.remove('is-open');
    }
  },
  closeLightBoxEsc(event) {
    if (event.code === 'Escape') this.closeModalbox();
    console.log('wwwwwwwwwww');
  },

  //  не срабатывает закрытие по клику на мадальное окно
  closelightboxOverlay(event) {
    // if (event.currentTarget === event.target)
    this.closeModalbox();
    console.log('qqqqqqqqq');
  },
};

imageGallery.addEventListener('click', handleGallery.openModalbox);
closeButton.addEventListener('click', handleGallery.closeModalbox);

document.addEventListener(
  'keyup',
  handleGallery.closeLightBoxEsc.bind(handleGallery),
);
// не срабатывает закрытие по клику на мадальное окно
lightboxOverlay.addEventListener(
  'click',
  handleGallery.closelightboxOverlay.bind(handleGallery),
);
