'use strict';

// Получите от пользователя 2 числа

// Напишите функцию нахождения минимального числа,
// без использования условного оператора, циклов и массивов

// Не используйте Math.max и Math.min

const firstNum = +prompt('введите первое число');
const secondNum = +prompt('введите второе число');

// eslint-disable-next-line max-len
const calcLesserNumber = (first, second) => ((first + second) - Math.abs(first - second)) / 2;

alert(`Наименьшее число: ${calcLesserNumber(firstNum, secondNum)}`);

