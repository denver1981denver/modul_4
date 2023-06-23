'use strict';

const rectangle = {
  width: 5,
  height: 5,
  get areaRect() {
    return `Площадь прямоугольника: ${(this.width * this.height)} см`;
  },
  get rectPerimeter() {
    return `Периметр прямоугольника: ${((this.width + this.height) * 2)} cм`;
  },
  set widthRect(val) {
    if (Number.isInteger(val)) {
      this.width = val;
    } else {
      this.width = 5;
    }
  },
  set heightRect(val) {
    if (Number.isInteger(val)) {
      this.height = val;
    } else {
      this.height = 5;
    }
  },
  print() {
    console.log(this.areaRect);
    console.log(this.rectPerimeter);
  },
};

rectangle.print();

rectangle.widthRect = 10;
rectangle.heightRect = 8;

rectangle.print();
