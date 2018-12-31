// @flow
export default class randomShow {
  constructor(el) {
    this.el = el;
    this._bindAnimation();
  }

  _random() {
    return Math.floor(Math.random() * 20) * 10;
  }

  _addClass(el, className) {
    return new Promise(function(resolve) {
      el.classList.add(className);
      resolve();
    });
  }

  _bindAnimation() {
    this._addClass(this.el, 'u-state--1')
      .then(() => {
        const random = this._random();
        setTimeout(() => {
          return this._addClass(this.el, 'u-state--2');
        }, 50 + random);
      })
      .then(() => {
        const random = this._random();
        setTimeout(() => {
          return this._addClass(this.el, 'u-state--3');
        }, 60 + random);
      });
  }
}
