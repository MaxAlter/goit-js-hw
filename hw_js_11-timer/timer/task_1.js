'use strict';

const defs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  timerId: document.querySelector('#timer-1'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = document.querySelector(selector)),
      (this.targetDate = targetDate.getTime()),
      (this.days = this.selector.querySelector('span[data-value="days"]')),
      (this.hours = this.selector.querySelector('span[data-value="hours"]')),
      (this.mins = this.selector.querySelector('span[data-value="mins"]')),
      (this.secs = this.selector.querySelector('span[data-value="secs"]')),
      (this.timerId = 0);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockFace() {
    const time = this.targetDate - Date.now();
    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  start() {
    this.updateClockFace();
    this.timerId = setInterval(() => {
      this.updateClockFace();
    }, 1000);
  }
}

const CounterTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 20, 2020'),
});

CounterTimer.start();
