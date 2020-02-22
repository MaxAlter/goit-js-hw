'use strict';

import templatesList from '../templates/template.hbs';
import apiService from '../services/apiService';

const defs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  button: document.querySelector('.button'),
};

defs.form.addEventListener('submit', searchFormSubmit);
defs.button.addEventListener('click', loadMoreButtonHandler);

function searchFormSubmit(e) {
  e.preventDefault();
  apiService.resetPage();
  clearImageItems();

  let inputValue = e.currentTarget.elements.query.value;
  apiService.searchQuery = inputValue;
  apiService.fetchImage().then(insertImageItemMarkup);
}

function loadMoreButtonHandler() {
  apiService.fetchImage().then(insertImageItemMarkup);
}

function insertImageItemMarkup(images) {
  const markup = templatesList(images);
  defs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearImageItems() {
  defs.gallery.innerHTML = '';
}
