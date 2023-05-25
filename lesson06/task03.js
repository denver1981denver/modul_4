'use strict';

// Скопируйте код task02.js в task03.js
// Добавьте 4-ый опциональный параметр у функции
//  4-ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

const getParityNumber = (string, firstNum, secondNum) => {
  let result;

  if (string === 'even') {
    do {
      result = Math.round(Math.random() * (firstNum - secondNum) + secondNum);
    } while (result % 2 !== 0);
  }
  
  if (string === 'odd') {
    do {
      result = Math.round(Math.random() * (firstNum  - secondNum) + secondNum);
    } while (result % 2 === 0);
  }

  return result;
};

const randomNumberGenerator3 = (amountNumbers, n, m, parityDefinition) => {
  let arrayNumbers = [];
  n = Math.abs(n);
  m = Math.abs(m);

  for (let i = 0; i < amountNumbers; i++) {
    arrayNumbers.push(getParityNumber(parityDefinition, n, m));
  }

  return arrayNumbers.sort((a, b) => a - b);
};

console.log(randomNumberGenerator3(15, 10, 80, 'even'));
console.log(randomNumberGenerator3(8, 40, 50, 'odd'));