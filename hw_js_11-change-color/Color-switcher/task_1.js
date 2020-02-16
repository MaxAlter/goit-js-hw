'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const defs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const settingInterval = {
  timerId: 0,
  isActiv: false,

  start() {
    if (!this.isActiv) {
      let changeColorInterval = setInterval(this.changeColor, 1000);
      this.isActiv = true;
      this.timerId = changeColorInterval;
    }
  },
  stop() {
    if (this.isActiv) {
      clearInterval(this.timerId);
      this.isActiv = false;
    }
  },
  changeColor() {
    defs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  },
};

defs.start.addEventListener(
  'click',
  settingInterval.start.bind(settingInterval),
);

defs.stop.addEventListener('click', settingInterval.stop.bind(settingInterval));
