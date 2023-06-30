'use strict';

 (() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

   const getRandomIntInclusive = () => {
   return Math.floor(Math.random() * 3);
  };

   const game = () => {
      const result = {
       player: 0,
        computer: 0,
      };

  const check = () => {
    const user = prompt(`${[...FIGURES]}?`);
    
    if(user === null) {
      if (confirm(`Вы действительно хотите выйти? `)) {
        return null;
      } else {
         return check();
      }
    }

    else {
      return filter(user);
    }
  };

  const filter = str => {

    if (str === '') return check();
    const res = FIGURES.find(element => element.slice(0, str.length) === str.toLowerCase());

    if(res) {
      return res;
    } else {
      return check();
    }
  };

    //  const lang = language === 'EN' || language === 'ENG' ?
    //  FIGURES_ENG : FIGURES_RUS;
    // const lang = FIGURES_RUS;

     return function start() {
      const userMove = check();
       const computerMove = FIGURES[getRandomIntInclusive()];
       
      if (userMove === null) {
          return alert(`компьютер: ${result.computer}\n игрок: ${result.player}`);
        }; 
        
        if (userMove === computerMove) {
          alert(`Вы: ${userMove}
            компьютер: ${computerMove}
            Ничья`);
        } else {
          if (
            (userMove === "камень" && computerMove === "ножницы") ||
            (userMove === "ножницы" && computerMove === "бумага") ||
            (userMove === "бумага" && computerMove === "камень")
          ) {
            result.player++;
            alert(`Вы: ${userMove}
              компьютер: ${computerMove}
              Вы выиграли`);
            if(!confirm('Ещё?')) {
              return alert(`Результат:
                Компьютер ${result.computer}
                Игрок ${result.player}`);
            }
          } else {
            result.computer++;
            alert(`Вы: ${userMove}
                   компьютер: ${computerMove}
                    Компьютер выиграл`);
          }
        }

        return start();
     
      };
    };

  
   window.RPS = game;
 })();



 