'use strict';

//  С помощью конструкции if (else) убедитесь, что пользователь ввёл число

//  Если число, то всё должно работать как и в прошлом задании

//  Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"

//  Других сообщений в консоли быть не должно.

const productName = prompt('Наименование товара', 'IPhone 14 Pro'),
	quantity = prompt('Количество товара', '1'),
	category = prompt('Категория товара', 'смартфон'),
	price = prompt('Цена товара', '116999');

if (quantity === null || price === null) {
	console.error('"Вы ввели некорректные данные"');
} else if ((!Number.isInteger(+quantity) || quantity.trim() === '') ||(!Number.isInteger(+price) || price.trim() === '' )) {
	console.error('"Вы ввели некорректные данные"');
} else {
	console.log('Количество товара: ', +quantity, 'тип данных: ', typeof +quantity);
	console.log('Цена товара: ', +price, 'тип данных: ', typeof +price);
	console.log(`"На складе ${+quantity} единицы товара ${productName} на сумму ${+quantity * +price} деревянных"`);
}




