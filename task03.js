'use strict';

// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

// Порядок применения скидок должен соблюдаться

const price = +prompt('Введите цену'),
  quantityGoods = +prompt('Сколько штук?'),
  totalAmount = price * quantityGoods,
  productPromoCode = (confirm('Хотите ввести промокод?')) ? prompt('Введите промокод'): null;

const calcShoppingCart = (total, quantity, promoCode) => {
  let bonus1 = 0,
    bonus2 = 0;
  if (quantity > 10) {bonus1 = total * 0.03};
  if (total > 30000) {bonus2 = (total - 30000) * 0.15} ;
  if (promoCode === 'METHED') {total = total - total / 10};
  total = total - bonus1 - bonus2;
  if (promoCode === 'G3H2Z1' && total > 2000) {total -= 500};
  return total;
}

const discountedAmount = calcShoppingCart(totalAmount, quantityGoods, productPromoCode);

alert(`Вся сумма со скидкой составляет ${discountedAmount} рублей`);