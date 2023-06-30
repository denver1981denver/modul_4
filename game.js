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

  const checkNull = () => {
    const userData = prompt(`${[...FIGURES]}?`);
    
    if(userData === null) {
      if (confirm(`Вы действительно хотите выйти? `)) {
        return null;
      } else {
         return checkNull();
      }
    }

    else {
      return checkString(userData);
    }
  };

  const checkString = (str) => {
    if (str === "") return checkNull();

    const converter = FIGURES.find(
      (element) => element.slice(0, str.length) === str.toLowerCase()
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
          return alert(`компьютер: ${result.computer}\n игрок: ${result.player}`);
        }; 
        
        if (userMove === computerMove) {
          alert(`Вы: ${userMove} компьютер:\n  ${computerMove}\n Ничья`);
        } else {
          if ((userMove === "камень" && computerMove === "ножницы") ||
            (userMove === "ножницы" && computerMove === "бумага") ||
            (userMove === "бумага" && computerMove === "камень")) {
            result.player++;
            alert(`Вы: ${userMove}\n компьютер: ${computerMove}\n Вы выиграли`);
            if(!confirm('Ещё?')) {
              return alert(`Результат: Компьютер ${result.computer} Игрок ${result.player}`);
            }
          } else {
            result.computer++;
            alert(
              `Вы: ${userMove}\n компьютер: ${computerMove}\n Компьютер выиграл`
            );            
          }
        }

        return start();
      };
    };

   window.RPS = game;
 })();

console.log(Math.floor(Math.random() * 3));

 