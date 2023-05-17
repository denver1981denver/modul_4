'use strict';

// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

// 1 способ - Алгоритм Евклида

let firstNum = Math.abs(+prompt('Введите первое число')),
	secondNum = Math.abs(+prompt('Введите второе число'));

while (firstNum != 0 && secondNum != 0) {
	if (firstNum > secondNum ) {
		firstNum = firstNum % secondNum ;
	} else {
		secondNum = secondNum % firstNum;
	}
}

alert(`наибольший общий делитель : ${firstNum + secondNum}`);

// 2 способ - Алгоритм вычитания

firstNum = Math.abs(+prompt('Введите первое число'));
secondNum = Math.abs(+prompt('Введите второе число'));

while (firstNum != secondNum) {
	if (firstNum > secondNum ) {
		firstNum = firstNum - secondNum ;
	} else {
		secondNumber  = secondNum - firstNum;
	}
}

alert(`наибольший общий делитель: ${firstNum}`);

