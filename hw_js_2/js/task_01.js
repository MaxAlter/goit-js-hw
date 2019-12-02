'use strict';

const wordsArr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numberArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let logItems = function (arr) {

    for (let i = 0; i < arr.length; i += 1) {
        console.log(`${i + 1}- ${arr[i]}`);
    }
}
logItems(wordsArr);
logItems(numberArr);