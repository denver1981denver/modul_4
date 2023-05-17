'use strict';

// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

// 1 способ - Алгоритм Евклида

let firstNumber = Math.abs(+prompt('Введите первое число')),
	secondNumber = Math.abs(+prompt('Введите второе число'));

const calcGcdOne = (firstNum, secondNum) => {

	while (firstNum != 0 && secondNum != 0) {
		if (firstNum > secondNum ) {
			firstNum = firstNum % secondNum ;
		} else {
			secondNum = secondNum % firstNum;
		}
	}

	return firstNum + secondNum;
}

alert(`наибольший общий делитель: ${calcGcdOne(firstNumber, secondNumber)}`);

// 2 способ - Алгоритм вычитания

const calcGcdTwo = (firstNum, secondNum) => {
	while (firstNum != secondNum) {
    if (firstNum > secondNum) {
      firstNum = firstNum - secondNum;
    } else {
      secondNumber = secondNum - firstNum;
    }
  }

  return firstNum + secondNum;
};

alert(`наибольший общий делитель: ${calcGcdTwo(firstNumber, secondNumber)}`);




