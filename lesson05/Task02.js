'use strict';

const number = +prompt('Введите число')

const isPrime = num => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }

  return true;
}

console.warn(isPrime(number));


