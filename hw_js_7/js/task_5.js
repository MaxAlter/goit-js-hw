'use strict';

let nameInput = document.querySelector('#name-input');
console.log(nameInput);

let spanName = document.querySelector('#name-output');
console.log(spanName);

nameInput.addEventListener('input', handleInpup);

function handleInpup() {
  nameInput.value
    ? (spanName.textContent = nameInput.value)
    : (spanName.textContent = ' незнакомец');
}
