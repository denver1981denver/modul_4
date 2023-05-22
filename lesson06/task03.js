'use strict';

// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (namesArray, prefix) => {
  let result = [];

  for (const item of namesArray) {
    result.push(prefix + ' ' + item);
  }

  return result;
}

console.log(addPrefix(names, 'Mr'));