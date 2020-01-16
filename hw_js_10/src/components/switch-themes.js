'use strict';

import { Theme } from './Themes';

const defs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

const checkLocalStorage = {
  setLocalTheme() {
    const setTheme = localStorage.getItem('theme');
    if (setTheme) {
      defs.body.classList.add(setTheme);
      setTheme === Theme.DARK
        ? (defs.switch.checked = true)
        : (defs.switch.checked = false);
    }
  },
  changeSwitcherPosition() {
    if (defs.body.classList.contains(Theme.DARK)) {
      defs.body.classList.remove(Theme.DARK);
      defs.body.classList.add(Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
      return;
    }
    defs.body.classList.remove(Theme.LIGHT);
    defs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  },
};

checkLocalStorage.setLocalTheme();
defs.switch.addEventListener('change',checkLocalStorage.changeSwitcherPosition);
