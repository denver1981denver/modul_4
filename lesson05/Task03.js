'use strict';

const string = prompt('Введите строку');

const getStringShifter = str => {

  let stringReverse = '';

  for (let i = str.length -1 ; i >= 0; i--) {
    stringReverse += str[i];
  }

  return stringReverse;
}

alert(getStringShifter(string));

