'use strict';

// Напишите функцию, которая принимает строку и возвращает обратную строку

// Пример: "Привет мир" => "рим тевирП"

const string = prompt('Введите строку');

const getStringShifter = str => {

  let stringReverse = '';

  for (let i = str.length -1 ; i >= 0; i--) {
    stringReverse += str[i];
  }

  return stringReverse;
}

alert(getStringShifter(string));

