'use strict';

const number = +prompt('Введите число')

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) return false;
    }
  }
  return true;
}

console.warn(isPrime(number));


// function isPrime(x) {
//   if (x < 2) return false;

//   for (var i = x - 1; i > 1; i--) {
//     if (x % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// for (let i = -10; i < 5000; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// function reverseStr(str) {
//   2;
//   return str.split("").reverse().join("");
//   3;
// }
// 4;

// 5;
// alert(reverseStr("Привет мир!"));

// function reverseStr(str) {
// 2
//     var newStr = '', i;
// 3
//     for (i = str.length - 1; i >= 0; i--) {
// 4
//         newStr += str.charAt(i);
// 5
//     }
// 6
//     return newStr;
// 7
// }
// 8
 
// 9
// alert(reverseStr('Привет мир!'));
