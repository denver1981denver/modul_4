'use strict';

const fontStyle = 'color: lime; font-size: 20px; font-face: Comic Sans MC;'

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice () {
    return this.totalPrice;
  },
  add (name, price, quantity = 1) {
    const product = {name, price, quantity};
    this.items.push(product);
    this.increaseCount(quantity);
    this.calculateItemPrice (quantity * price);
  },
  increaseCount (num) {
    this.count += num;
  },
  calculateItemPrice (sum) {
    const totalAmount = [this.totalPrice, sum];
    this.totalPrice = totalAmount.reduce((acc, item) => acc + item);
  },
  clear () {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print () {
    console.log(JSON.stringify(this.items));
    console.log(`%cОбщая стоимость корзины: ${this.getTotalPrice ()} рублей`, fontStyle);
  },
};

// вызов метода cart.add

cart.add('водка: Путинка', 299, 10);
cart.add('капуста квашенная', 139);
cart.add('макарошки: Доширак', 26.90, 2);
cart.add('лимонад: Буратино', 91, 3);

// вывод данных в консоль
cart.print();

// очистка корзины
cart.clear();

// вывод данных в консоль
cart.print();