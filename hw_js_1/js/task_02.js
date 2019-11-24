'use strict';

const total = 100;
const ordered = 1;
let message;

const result = total > ordered;

if (result) {
    message = ('Заказ оформлен, с вами свяжется менеджер');
} else {
    message = ('на складе не достаточно товаров');
}
console.log(message);
