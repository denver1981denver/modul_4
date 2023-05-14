'use strict';

// Во многих странах иная прогрессивная шкала налогообложения и 
// вычисляется она более сложным способом: 

// Налоговая ставка 13% на доход до 15 000 ₽

// Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽

// Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.

// Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.

const minimumTaxRate = (15000 / 100) * 13,
  averageTaxRate = ((50000 - 15000) / 100) * 20 + minimumTaxRate,
  $userIncome = prompt("Введите сумму дохода");

let income = $userIncome,
  percent = 13,
  taxAmount;

if ($userIncome <= 15000) {
  income = $userIncome ;
  taxAmount = (income / 100) * percent;

} else if ($userIncome > 50000) {
  income = $userIncome - 50000;
  percent = 30;
  taxAmount = (income / 100) * percent + averageTaxRate;

} else {
  income = $userIncome - 15000;
  percent = 20;
  taxAmount = (income / 100) * percent + minimumTaxRate;
}

console.log('Сумма налога составляет:', taxAmount, 'rub'.toUpperCase());

