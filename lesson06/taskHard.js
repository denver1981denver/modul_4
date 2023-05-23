'use strict';

// Напишите функцию getAveragePriceGoods
// для получения средней цены товара

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = cash => {
  let quantity = 0,
    totalAmount = 0;
  for (let i = 0; i < allCashbox.length; i++) {
    quantity += cash[i][0];
    totalAmount += cash[i][1];
  }

  return (totalAmount / quantity).toFixed(2);
};

alert(`Cредняя стоимость одного товара в магазине: ${getAveragePriceGoods(allCashbox)}`);