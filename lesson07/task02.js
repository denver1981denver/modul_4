'use strict';

// Продолжаем работать с предыдущей функцией
// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const randomNumberGenerator2 = (amountNumbers, n, m) => {
  let arrayNumbers = [];
  n = Math.abs(n);
  m = Math.abs(m);

  for (let i = 0; i < amountNumbers; i++) {
    arrayNumbers.push(Math.round(Math.random() * (n - m) + m));
  }

  return arrayNumbers;
};

console.log(randomNumberGenerator2(10, -20, 10));


