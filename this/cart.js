'use strict';

const fontStyle = 'color: lime; font-size: 20px; font-face: Comic Sans MC;';

const cart = {
  items: [],
  count: 0,
  discount: null,
  get totalPrice() {
    return this.calculateItemPrice().toFixed(2);
  },
  set setDiscount(promo) {
    if (promo === 'METHED') this.discount = 15;
    if (promo === 'NEWYEAR') this.discount = 21;
  },
  add(name, price, quantity = 1) {
    this.items.push({name, price, quantity});
    this.increaseCount(quantity);
  },
  calculateItemPrice() {
    const result = this.items.reduce((acc, item) =>
      acc + (item.price * item.quantity), 0);
    return (this.discount === null) ? result : result - this.discount / 100 * result;
  },
  increaseCount(num) {
    this.count += num;
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`%cОбщая стоимость корзины: ${this.totalPrice} рублей`, fontStyle);
  },
};

cart.add('Саперная садовая лопата с зубчиками WORLD RIDER', 221);
cart.add('Веревка полипропиленовая с сердечником,', 329);
cart.add('Мыло хозяйственное Clean&White by Duru ', 100, 3);
cart.setDiscount = 'METHED';

cart.print();

cart.clear();

cart.print();

