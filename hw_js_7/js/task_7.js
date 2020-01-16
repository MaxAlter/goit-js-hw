'use strict';

let fontsizeControl = document.querySelector('#font-size-control');
let sizeText = document.querySelector('#text');

fontsizeControl.addEventListener('input', increaseText);

function increaseText() {
  sizeText.style.fontSize = fontsizeControl.value + 'px';
};
