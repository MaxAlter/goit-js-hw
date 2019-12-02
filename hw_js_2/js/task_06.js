'use strict';

let input;
let numbers = [];
let total = 0;

let UserChoise = `введите число`;

do {
    input = prompt(UserChoise);
    if (isNaN(input) === true) {
        alert('Вводить нужно только число');
    } else {
        numbers.push(input);
    }
} while (input !== null);

numbers.pop();
for (let i of numbers) {
    total += Number(i);
}
console.log(numbers);
console.log(`Общая сумма чисел ${total}`);