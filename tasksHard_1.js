'use strict';

const userIncome = prompt('Введите сумму дохода');

if (userIncome <= 15000) {
  console.log('Сумма вашего налога соcтавляет: ', userIncome / 100 * 13, 'рублей');
}

else if ((userIncome > 50000)) {
  console.log('Сумма вашего налога соcтавляет: ', userIncome / 100 * 30, 'рублей');
}

else {
  console.log('Сумма вашего налога соcтавляет: ', userIncome / 100 * 20, 'рублей');
}