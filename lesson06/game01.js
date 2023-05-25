'use strict;'

// Написать простой игровой бот "Угадай число", который умеет следующее:

// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

const checkNumber = num => {
  return !Number.isInteger(num) || num > 100 || num <= 0;
}

const userResponse = confirm('Бот загадал число 1 до 100, хотите сыграть?');

const playGameNumber = () => {
  const hiddenNumber = Math.round(Math.random() * 100) ;

  const getGameResult = () => {
    while (true) {
      let userNumber;

      while (checkNumber(+userNumber)) {
        if (userNumber === null) {
          return 'Вы вышли из игры';
        }

        userNumber = prompt('Введите число от 1 до 100');
      }

      if ( hiddenNumber === +userNumber) {
        return 'Правильно';
      }

      if (hiddenNumber > userNumber) {
        alert('Больше!');
      }

      if (hiddenNumber < userNumber) {
        alert('Меньше!');
      }

    const newAttempt = confirm ('Попробовать ещё раз?');
    
    if (!newAttempt)  {
      return 'Вы вышли из игры'};
    }
  } 

return alert(getGameResult()) ;
};


const getUserResponse = response => {
  const result =  (response)? playGameNumber() : null;

  return result;
};

getUserResponse(userResponse);

