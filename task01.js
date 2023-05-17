'use strict';

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

// 1 евро = 1.2 доллара,

// 1 доллар = 73 рубля.

const euroCurrency = +prompt('Ввведите валюту в евро');

const  getConvertCurrency = currency => (currency * 1.2) * 73;

alert(`конвертируемая сумма ${getConvertCurrency(euroCurrency)} рублей`);

