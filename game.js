'use strict';

(() => {
  let checkString;

  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = () => Math.floor(Math.random() * 3);

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    // проверка на null
    const checkNull = () => {
      const userData = prompt(`${[...FIGURES]}?`);

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

      const converter = FIGURES.find(
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
      const computerMove = FIGURES[getRandomIntInclusive()];

      if (userMove === null) {
        return alert(`Результат:\n  Компьютер ${result.computer},\n  
        Игрок ${result.player}`);
      }

      if (userMove === computerMove) {
        alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n Ничья`);
      } else {
        if ((userMove === 'камень' && computerMove === 'ножницы') ||
            (userMove === 'ножницы' && computerMove === 'бумага') ||
            (userMove === 'бумага' && computerMove === 'камень')) {
          result.player++;
          alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n Вы выиграли`);
          if (!confirm('Ещё?')) {
            return alert(`Результат:\n  Компьютер ${result.computer},\n  
            Игрок ${result.player}`);
          }
        } else {
          result.computer++;
          alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n 
          Компьютер выиграл`);
        }
      }

      return start();
    };
  };

  window.RPS = game;
})();


