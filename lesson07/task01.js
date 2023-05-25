'use strict';

// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

const randomNumberGenerator = amountNumbers => {
  let arrayNumbers = [];

  for (let i = 0; i < amountNumbers; i++) {
    arrayNumbers.push(Math.round(Math.random() * 100));
  }

  return arrayNumbers;
};

console.log(randomNumberGenerator(+prompt('Задайте количество чисел')));




