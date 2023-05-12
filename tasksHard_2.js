'use strict';

const minimumTaxRate = (15000 / 100) * 13,
  averageTaxRate = ((50000 - 15000) / 100) * 20 + minimumTaxRate,
  userIncome = prompt("Введите сумму дохода");

let income = userIncome,
  percent = 13,
  calculationFormula = (income / 100) * percent,
  taxAmount;

if (userIncome <= 15000) {

  taxAmount = calculationFormula;

} else if (userIncome > 50000) {
  income = userIncome - 50000;
  percent = 30;
  taxAmount = calculationFormula + averageTaxRate;
} else {
  income = userIncome - 15000;
  percent = 20;
  taxAmount = calculationFormula + minimumTaxRate;
}

console.log('Сумма налога составляет:', taxAmount, 'rub'.toUpperCase());


console.log(minimumTaxRate);
console.log(averageTaxRate);