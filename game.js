'use strict';

(() => {
  let checkString;

  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = () => Math.floor(Math.random() * 3);

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    // проверка на null
    const checkNull = () => {
      const userData = prompt(`${[...lang]}?`);

      if (userData === null) {
        if (confirm(`Вы действительно хотите выйти? `)) {
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

      const converter = lang.find(
          (element) => element.slice(0, str.length) === str.toLowerCase(),
      );

      if (converter) {
        return converter;
      } else {
        return checkNull();
      }
    };

    return function start() {
      const userMove = checkNull();
      const computerMove = lang[getRandomIntInclusive()];

      if (userMove === null) {
        return alert(`Результат:\n  Компьютер ${result.computer},\n  Игрок ${result.player}`);
      }

      if (userMove === computerMove) {
        alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n Ничья`);
      } else {
        if ((userMove === lang[0] && computerMove === lang[1]) ||
            (userMove === lang[1] && computerMove === lang[2]) ||
            (userMove === lang[2] && computerMove === lang[0])) {
          result.player++;
          alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n Вы выиграли`);
          if (!confirm('Ещё?')) {
            return alert(`Результат:\n  Компьютер ${result.computer},\n  Игрок ${result.player}`);
          }
        } else {
          result.computer++;
          alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n Компьютер выиграл`);
        }
      }

      return start();
    };
  };

  window.RPS = game;
})();


