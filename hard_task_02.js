'use strict';

// Получите от пользователя 2 числа

// Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов

// Не используйте Math.max и Math.min

const firstNum = +prompt("введите первое число"),
  secondNum = +prompt("введите второе число");

const calcLesserNumber = (first, second) => (first < second) ? first : second;

 alert(`Наименьшее число: ${calcLesserNumber(firstNum, secondNum)}`);

