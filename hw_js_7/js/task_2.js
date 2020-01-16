'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function productLists(ingredients) {
  ingredients.forEach((ingredients, index) => {
    let product = document.createElement('li');
    product.textContent = ingredients;
    document.querySelector('#ingredients').append(product);
  });
}

productLists(ingredients);
