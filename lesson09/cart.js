'use strict';

const fontStyle = 'color: lime; font-size: 20px; font-face: Comic Sans MC;'

const cart = {
  amount: 0,
  total: 0,
  items: [],
  get totalPrice() {
    return  this.calculateItemPrice(); 
  },
  count: 0,
 
  add (name, price, quantity = 1) {
    const product = {name, price, quantity};
    this.items.push(product);
    this.increaseCount(quantity);
    this.amount = quantity * price;
    this.totalPrice;
  },
  increaseCount (num) {
    this.count += num;
  },
  calculateItemPrice () {
    this.total = [this.total, this.amount].reduce((acc, item) => acc + item);
    return this.total;
  },
  clear () {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print () {
    console.log(JSON.stringify(this.items));
    console.log(`%cОбщая стоимость корзины: ${this.total} рублей`, fontStyle);
    
  },
};

// вызов метода cart.add
cart.add('Портативный кинотеатр Cinemood ДиаКубик (CNMD0016LE)', 30990);
cart.add('Беспроводные наушники с микрофоном HONOR Choice EarBuds X White (55041961)', 2399);
cart.add('Фитнес-трекер Xiaomi Mi Band 7 Black (M2129B1)', 2999 ,2);

// вывод данных в консоль
cart.print();

// очистка корзины
// cart.clear();

// вывод данных в консоль
// cart.print();
