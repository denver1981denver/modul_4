'use strict';

const productName = prompt('Наименование товара', 'IPhone 14 Pro'),
	quantity = +prompt('Количество товара', '1'),
	category = prompt('Категория товара', 'смартфон'),
price = +prompt('Цена товара', '116999');
  
	

console.log('Количество товара: ', quantity, 'тип данных: ', typeof quantity);

console.log('Цена товара: ', price, 'тип данных: ', typeof price);

console.log(`"На складе ${quantity} единицы товара ${productName} на сумму ${quantity * price} деревянных"`);


