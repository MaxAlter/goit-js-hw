'use strict';
import templateCountry from '../tamplates/country_template.hbs';
import templateCountryItem from '../tamplates/country_template_item.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';
import fetchCountries from '../services/fetchCountries';
import _debounce from 'lodash.debounce';

const defs = {
  input: document.querySelector('#user-country'),
  output: document.querySelector('.js-output-box'),
};

defs.input.addEventListener('input', _debounce(searchCountry, 500));

function searchCountry() {
  const inputValue = defs.input.value;
  defs.output.innerHTML = '';
  if (!inputValue) return;
  fetchCountries(inputValue)
    .then(data => {
      let markupCountry;
      if (data.length <= 10 && data.length > 2) {
        markupCountry = markupCountyryitem(data);
        renderCountryItem(markupCountry);
      } else if (data.length === 1) {
        markupCountry = markupList(data);
        renderCountryItem(markupCountry);
      } else if (data.length > 10) {
        PNotify.alert({
          text: 'many matches found, please refine your search',
          delay: 1500,
        });
      }
    })
    .catch(() =>
      PNotify.error({
        text: 'country not found, repeat search',
        delay: 1500,
      }),
    );
}

function markupList(item) {
  return templateCountry(item);
}

function markupCountyryitem(item) {
  return templateCountryItem(item);
}

function renderCountryItem(items) {
  return defs.output.insertAdjacentHTML('beforeend', items);
}
