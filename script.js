'use strict';
// хранение данных о победителе в RPS
window.resultRPS = {
  player: true,
};

const startGameRPS = window.RPS.game();

const startGames = () => {
  do {
    if (!startGameRPS()) {
      if (window.marbles.game()) {
        return;
      }
    } else {
      return;
    }
  } while (confirm('Сыграем ещё разок?'));
};

startGames();
