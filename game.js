'use strict';

 (() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

   const getRandomIntInclusive = () => {
   return Math.floor(Math.random() * 3);
  };

   const game = () => {
      const result = {
       player: 0,
        computer: 0,
      };

    //  const lang = language === 'EN' || language === 'ENG' ?
    //  FIGURES_ENG : FIGURES_RUS;

    // const lang = FIGURES_RUS;

     return function start() {
       const userMove = prompt(`${[...FIGURES_RUS]}?`);
       const computerMove = FIGURES_RUS[getRandomIntInclusive()];
       
      if (userMove === null) {
        if (confirm(`Вы действительно хотите выйти?
                    игрок: ${result.player}
                    компьютер: ${result.computer}`)) {
          return;
        } else {
           return start();
        }
        
      }
        if (userMove === computerMove) {
          alert("ничья");
        } else {
          if (
            (userMove === "камень" && computerMove === "ножницы") ||
            (userMove === "ножницы" && computerMove === "бумага") ||
            (userMove === "бумага" && computerMove === "камень")
          ) {
            result.player += 1;
            alert(` игрок победил
            игрок: ${result.player}
                    компьютер: ${result.computer}
                    
                            `);
            if(!confirm('Хотите сыграть ещё?')) {
              return;
            }
          } else {
            result.computer += 1;
            alert(` компьютер победил
                    игрок: ${result.player}
                    компьютер: ${result.computer}
                                    `);
          }
        }

        return start();
     
      };
    };

  
   window.RPS = game;
 })();




//  const a = prompt([...FIGURES_RUS] + '?');

// console.log();

