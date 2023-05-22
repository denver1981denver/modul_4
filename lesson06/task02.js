'use strict';

// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
  style += 'color: skyblue; text-shadow: 1px 1px 2px black, 0 0 1em skyblue, 0 0 0.2em skyblue';

const getAverageValue = cash => {
  let sum = 0;

  for (let i = 0; i < allCashbox.length; i++) {
    sum += allCashbox[i];
  }

  return Math.floor(sum / allCashbox.length);
};

console.log(`%cСредний чек за день: ${getAverageValue(allCashbox)}`, style);

