'use strict';
// проверка ввода данных не целое число
const checkNumber = (num, min, max, firstData) => {
  return !Number.isInteger(num) || num > max || num < min || num === firstData;
}

// вычисление еоличества попыток в игре
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

    userNum = Math.abs(+userNum);

  } while (checkNumber(userNum, min, max, n));

  return userNum;
};

const userResponse = confirm('Xотите сыграть в угадай число?');

// Внешняя функция определяющая исходные данные для игры
const playGameNumber = () => {
  let minRange = 1,
      maxRange = 100;

  if (confirm('Хотите задать диапазон угадываемых чисел?')) {
    alert('Введите два числа');

    const firstNumber = getUserData(1, 100, 'первое');

    if (firstNumber === null) {
      return alert('вы вышли из игры');
    }

    const secondNumber = getUserData(1, 100 ,'второе', 'кроме', firstNumber);

    if (secondNumber === null) {
      return alert('вы вышли из игры');
    }
   
    maxRange = Math.max(firstNumber, secondNumber);
    minRange = Math.min(firstNumber, secondNumber);
  }

  const hiddenNumber = Math.round(Math.random() * (Math.abs(maxRange) - minRange) + minRange),
    count = Math.ceil(calcNumberAttempts(minRange, maxRange));

  // функция игры
  const getGameResult = () => {
    let userNumber,
    arrayUserNumber = [];

    alert(`Бот загадал число от ${minRange} до ${maxRange}
    количество попыток: ${count}`);

    // внешний цикл определяющий количество попыток
    for (let i = count ; i ; i--) {
      userNumber = getUserData(minRange, maxRange);
      
      // проверка на уже вводимые значения
      while (arrayUserNumber.some((item) => item === userNumber)) {
        alert('Вы уже вводили это число');

        userNumber = getUserData(minRange, maxRange);
      }
        
      if (userNumber === null) {
        return 'Вы вышли из игры';
      }

      if (hiddenNumber === userNumber) {
        return 'Вы выиграли!!!!';
      }

      if (hiddenNumber > userNumber) {
        alert('Загаданное число больше!');
      }

      if (hiddenNumber < userNumber) {
        alert('Загаданное число меньше!');
      }

      if (i !== 1) {
        if (!confirm (`Осталось ${i - 1} попыток. Попробовать ещё раз?`))  {
          return 'Вы вышли из игры';
        }
      };
  
      arrayUserNumber.push(userNumber);
    };

    return 'Вы проиграли.Попытки закончились';
  }
  
  return alert(getGameResult());
};

// функция запроса игры
const getUserResponse = response => {
  if (response) {
    return playGameNumber(); 
  }
};

getUserResponse(userResponse);



