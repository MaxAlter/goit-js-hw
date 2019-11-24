'use strict';

let input;
let total = 0;
const userMessage = 'введите число';

do {
  input = prompt(userMessage);
  if (isFinite(input) !== true) {
    alert('вводи только число');
  } else {
    total += +input;
  }
} while (input !== null); {
  alert(`общая сумма чисел равна = ${total}`);
}