'use strict';
// проверка ввода данных на целое число
const checkNumber = (num, min, max, firstData) =>
  !Number.isInteger(num) || num > max || num < min || num === firstData;

// вычисление количества попыток в игре
const calcNumberAttempts = (min, max) => {
  const result = (max === 100 && min === 50) ? 15 : (max - min) * 0.3;

  return result;
};

// функция для получения и обработки данных пользователя
const getUserData = (min, max, message = '', string = '', n = '') => {
  let userNum;

  do {
    userNum = prompt(`Введите ${message} число от ${min} до ${max} ${string} ${n}`);

    if (userNum === null) {
      return userNum;
    }

    // userNum = Math.abs(+userNum);
  } while (checkNumber(+userNum, min, max, n));

  return +userNum;
};

const userResponse = confirm('Xотите сыграть в угадай число?');

// Внешняя функция определяющая исходные данные для игры
const playGameNumber = () => {
  let minRange = 1;
  let maxRange = 100;

  if (confirm('Хотите задать диапазон угадываемых чисел?')) {
    alert('Введите два числа');

    const firstNumber = getUserData(1, 100, 'первое');

    if (firstNumber === null) {
      return alert('вы вышли из игры');
    }

    const secondNumber = getUserData(1, 100, 'второе', 'кроме', firstNumber);

    if (secondNumber === null) {
      return alert('вы вышли из игры');
    }

    maxRange = Math.max(firstNumber, secondNumber);
    minRange = Math.min(firstNumber, secondNumber);
  }

  const hiddenNumber = Math.round(Math.random() * (Math.abs(maxRange) - minRange) + minRange);
  const arrayUserNumber = [];
  let count = Math.ceil(calcNumberAttempts(minRange, maxRange));

  alert(`Бот загадал число от ${minRange} до ${maxRange} 
  количество попыток: ${count}`);

  // функция игры внешний цикл for заменён на рекурсивную функцию
  const getGameResult = () => {
    let userNumber = getUserData(minRange, maxRange);

    // проверка на уже вводимые значения

    // eslint-disable-next-line no-loop-func
    while (arrayUserNumber.some((item) => item === userNumber)) {
      alert('Вы уже вводили это число');

      userNumber = getUserData(minRange, maxRange);
    }

    if (hiddenNumber === userNumber) {
      return 'Вы выиграли!!!!';
    }

    if (userNumber === null) {
      return 'Вы вышли из игры';
    }

    if (hiddenNumber > userNumber) {
      alert('Загаданное число больше!');
    }

    if (hiddenNumber < userNumber) {
      alert('Загаданное число меньше!');
    }
    // счётчик - глубина рекурсии
    count--;

    if (count !== 0) {
      if (!confirm(`Осталось ${count} попыток. Попробовать ещё раз?`)) {
        return 'Вы вышли из игры';
      }
    }

    arrayUserNumber.push(userNumber);

    if (count !== 0) {
      return getGameResult();
    }

    //  выход функции
    return 'Вы проиграли.Попытки закончились';
  };

  return alert(getGameResult());
};

// функция запроса игры
const getUserResponse = response => {
  if (response) {
    return playGameNumber();
  }
};

getUserResponse(userResponse);


