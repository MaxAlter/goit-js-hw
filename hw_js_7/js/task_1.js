'use strict';

const documentCounter = () => {
  let ulElements = document.querySelectorAll('.item ul');
  let choppedulElement = [...ulElements];

  let h2Elements = document.querySelectorAll('.item h2');
  let choppedh2Element = [...h2Elements];

  for (let i = 0; i < choppedh2Element.length; i += 1) {
    let childrenelement = [...ulElements[i].children];
    let elementUl = childrenelement.reduce((counter, el) => counter + 1, 0);

    console.dir(`Категория:${choppedh2Element[i].textContent} `);
    console.log(`количество елементов:${elementUl}`);
  }
};

documentCounter();
