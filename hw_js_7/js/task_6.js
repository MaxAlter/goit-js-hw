'use strict';


let input = document.querySelector('#validation-input');

input.addEventListener('change', inputBlur);

function inputBlur() {
    input.classList.add('valid');
  if (input.value.length != input.dataset.length) {
    input.classList.add('invalid');
  } else if (input.classList.contains('invalid')) {
    input.classList.remove('invalid');
  }
};
