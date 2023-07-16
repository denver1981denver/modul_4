/* eslint-disable max-len */
'use strict';

window.RPS = (() => {
  let checkString;

  const FIGURES = ['камень', 'ножницы', 'бумага'];
  // рандомное число для бота
  const getRandomIntInclusive = () => Math.floor(Math.random() * 3);
  // функция игры
  const game = () => {
    // проверка на null
    const checkNull = () => {
      const userData = prompt(`${[...FIGURES]}?`);

      if (userData === null) {
        if (confirm(`Вы действительно хотите выйти?`)) {
          return null;
        } else {
          return checkNull();
        }
      } else {
        return checkString(userData);
      }
    };

    // конвертация строки в полную длину и проверка вводимых данных
    checkString = (str) => {
      if (str === '') return checkNull();

      const converter = FIGURES.find((element) =>
        element.slice(0, str.length) === str.toLowerCase());

      if (converter) {
        return converter;
      } else {
        return checkNull();
      }
    };

    alert(`Для определения первого хода в Марблы
    сыграем в камень, ножницы, бумага`);
    // запуск игры
    return function start() {
      const userMove = checkNull();
      const computerMove = FIGURES[getRandomIntInclusive()];

      // проверка на null и возврат булева значения в script.js для дезактивации второй игры
      if (userMove === null) {
        alert(`Вы вышли из игры`);
        return true;
      }
      // проверка на ничью
      if (userMove === computerMove) {
        alert(`Вы: ${userMove}\nБот: ${computerMove}\n Ничья`);
      } else {
        if ((userMove === 'камень' && computerMove === 'ножницы') ||
            (userMove === 'ножницы' && computerMove === 'бумага') ||
            (userMove === 'бумага' && computerMove === 'камень')) {
          // проверка на определение победителя

          return alert(`Вы: ${userMove}\nБот: ${computerMove}\nВы выиграли право первого хода`);
        } else {
          // запись результата победы бота для определения первого хода в Марблах
          window.resultRPS.player = false;

          return alert(`Вы: ${userMove}\nБот: ${computerMove}\nБот выиграл право первого хода`);
        }
      }

      return start();
    };
  };
  return {
    game,
  };
})();
