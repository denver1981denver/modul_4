'use strict';

 (() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

   const getRandomIntInclusive = () => {
   return Math.floor(Math.random() * 3);
  };

   const game = () => {
      // const result = {
      //  player: 0,
      //   computer: 0,
      // };

    //  const lang = language === 'EN' || language === 'ENG' ?
    //  FIGURES_ENG : FIGURES_RUS;

    const lang = FIGURES_RUS;

     return function start() {
       const userMove  = prompt(`${[...FIGURES_RUS]}?`);
       const computerMove =
     };
    };

  
   window.RPS = game;
 })();




//  const a = prompt([...FIGURES_RUS] + '?');

// console.log();

