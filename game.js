'use strict';

window.RPS = (() => {
  let checkString;

  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const TEXT_ENG = ['Do you really want to leave?', 'You:',
    'Computer:', 'You won', 'Сomputer won', 'Dead heat', 'More?', 'Result:',
    'Player:'];

  const TEXT_RUS = ['Вы уверены что хотите выйти?', 'Вы:', 'Компьютер:',
    'Вы выиграли', 'Компьютер выиграл', 'Ничья', 'Ещё?', 'Результат:',
    'Игрок:'];

  const getRandomIntInclusive = () => Math.floor(Math.random() * 3);

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    const langText = language === 'EN' || language === 'ENG' ?
      TEXT_ENG : TEXT_RUS;

    // проверка на null
    const checkNull = () => {
      const userData = prompt(lang + '?');

      if (userData === null) {
        if (confirm(langText[0])) {
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

      const converter = lang.find((element) =>
        element.slice(0, str.length) === str.toLowerCase());

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
        return alert(`${langText[7]}\n ${langText[2]} ${result.computer}\n ${langText[8]} ${result.player}`);
      }

      if (userMove === computerMove) {
        alert(`${langText[1]} ${userMove}\n${langText[2]} ${computerMove}\n ${langText[5]}`);
      } else {
        if ((userMove === lang[0] && computerMove === lang[1]) ||
            (userMove === lang[1] && computerMove === lang[2]) ||
            (userMove === lang[2] && computerMove === lang[0])) {
          result.player++;
          alert(`${langText[1]} ${userMove}\n${langText[2]} ${computerMove}\n ${langText[3]}`);
          if (!confirm(langText[6])) {
            return alert(`${langText[7]}\n  ${langText[2]} ${result.computer},\n  ${langText[8]} ${result.player}`);
          }
        } else {
          result.computer++;
          alert(`${langText[1]} ${userMove}\n${langText[2]} ${computerMove}\n ${langText[4]}`);
        }
      }

      return start();
    };
  };

  return {
    game,
  };
})();


