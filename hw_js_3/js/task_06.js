'use strict';

const products = [
  {
    name: 'Радар',
    price: 1300,
    quantity: 4,
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3,
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7,
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2,
  },
];

const calculateTotalPrice = function(products, key) {
  let result;
  for (let i = 0; i < products.length; i += 1) {
    if (key === products[i].name) {
      result = products[i].price * products[i].quantity;
    }
  }
  return result;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
