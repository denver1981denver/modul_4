'use strict';

window.marbles = (() => {
  const name = ['Игрок', 'Бот'];
  // рандомайзер бота
  const getRandomNumber = (num = 2) => Math.ceil(Math.random() * num);
  // получен массив для фильтрации данных игрока
  const getArrayNumbersBalls = (numBalls) => {
    const arrayBalls = [];

    for (let i = numBalls; i; i--) {
      arrayBalls.push(i);
    }

    return arrayBalls;
  };
  // проверка данных игрока на соответсвующее значение
  const checkNumbersBalls = (number, numBalls) => {
    const result = getArrayNumbersBalls(numBalls).some((elem) =>
      elem === number);

    return result;
  };
  // ввод данных пользователя и последующие проверки
  const getNumbersBalls = (numBalls) => {
    let hiddenNumber;

    do {
      hiddenNumber = prompt(`Загадайте количество шариков от 1 до ${numBalls}`);
      // проверка на NULL
      if (hiddenNumber === null) {
        return hiddenNumber;
      }

      hiddenNumber = +hiddenNumber;
    } while (!checkNumbersBalls(hiddenNumber, numBalls));

    return hiddenNumber;
  };
  // функция игры
  const game = () => {
    const numberBalls = {
      player: 5,
      bot: 5,
      move: null,
    };
    // проверка на совпадение чётных и нечётных чисел
    const getComparisonResult = (numFirst, numSecond) => {
      let result;

      if (numberBalls.move === 'player') {
        result = numFirst % 2 === numSecond % 2;
      }

      if (numberBalls.move === 'bot') {
        result = numFirst % 2 !== numSecond % 2;
      }

      return result;
    };
    //  распределение очков
    const ballDistribution = (playerMove, botMove) => {
      if (getComparisonResult(playerMove, botMove)) {
        numberBalls.bot += playerMove;
        numberBalls.player -= playerMove;
        if (numberBalls.player < 0) {
          numberBalls.player = 0;
        }

        if (numberBalls.bot > 10) {
          numberBalls.bot = 10;
        }

        return true;
      } else {
        numberBalls.bot -= playerMove;
        numberBalls.player += playerMove;
        if (numberBalls.bot < 0) {
          numberBalls.bot = 0;
        }

        if (numberBalls.player > 10) {
          numberBalls.player = 10;
        }

        return false;
      }
    };
    // определение победителя хода
    const getWinner = (player, bot) => {
      const winner = (ballDistribution(player, bot)) ? name[1] : name[0];
      return winner;
    };

    alert(`Старт игры
      Количество шариков
        Игрок: 5
        Бот: 5`);
    // старт игры с первым ходом пользователя
    // eslint-disable-next-line require-jsdoc
    function startPlayer() {
      numberBalls.move = 'player';
      const playerMove = getNumbersBalls(numberBalls.player);

      if (playerMove === null) {
        alert('Вы вышли из игры');
        return true;
      }

      const botMove = getRandomNumber();

      alert(`${getWinner(playerMove, botMove)} победил
            Бот:  ${numberBalls.bot}
            Игрок: ${numberBalls.player}
            `);

      if (numberBalls.player === 0) {
        return alert('Игра окончена: Вы проиграли!');
      }

      if (numberBalls.bot === 0) {
        return alert('Игра окончена: Вы победили!');
      }

      // рекурсивный вызов с первым ходом бота
      return startBot();
    }
    // старт игры с первым ходом бота
    // eslint-disable-next-line require-jsdoc
    function startBot() {
      numberBalls.move = 'bot';
      const botMove = getRandomNumber(numberBalls.bot);

      const playerMove = (confirm('Число чётное?')) ? 2 : 1;
      alert(`бот загадал ${botMove}`);

      if (playerMove === null) {
        alert('Вы вышли из игры');
        return true;
      }

      alert(`${getWinner(botMove, playerMove)} победил
            Бот:  ${numberBalls.bot}
            Игрок: ${numberBalls.player}
            `);

      if (numberBalls.player === 0) {
        return alert('Игра окончена: Вы проиграли!');
      }

      if (numberBalls.bot === 0) {
        return alert('Игра окончена: Вы победили!');
      }
      //  рекурсивный вызов с первым ходом полбзователя
      return startPlayer();
    }
    // определение старта соответствующей функции в звывисимости от результата
    // предыдущей игры
    const firstMove = (window.resultRPS.player) ? startPlayer : startBot;

    return firstMove();
  };

  return {
    game,
  };
})();

