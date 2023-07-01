'use strict';

const startGame = confirm('Хотите играть на русском?') ?
window.RPS.game() : window.RPS.game('ENG');

startGame();
