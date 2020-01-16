'use strict';

const valueCounter = document.querySelector('#value');
const typeDecrement = document.querySelector('.button,[data-action="decrement"]',);
const typeIncrement = document.querySelector('.button,[data-action="increment"]',);

let counter = 0;

const increment = function() {
  typeIncrement.addEventListener('click', () => {
    counter += 1;
    valueCounter.textContent = counter;
  });
  return value;
};

increment();

const decrement = function() {
  typeDecrement.addEventListener('click', () => {
    counter -= 1;
    valueCounter.textContent = counter;
  });
  return value;
};

decrement();