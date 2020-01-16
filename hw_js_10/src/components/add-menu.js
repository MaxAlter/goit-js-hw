'use strict';

import menuItems from '../menu-item/menu-items.json';
import menuItemTemplate from './templates/list-menu.hbs';

const menulist = document.querySelector('.js-menu');

const addMenuList = (tamplate, arrayItems, parent) => {
  const markUpMenu = arrayItems.map(item => tamplate(item)).join('');
  parent.insertAdjacentHTML('beforeend', markUpMenu);
};

addMenuList(menuItemTemplate, menuItems, menulist);
