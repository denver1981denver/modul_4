'use strict';

const rain = (Math.round(Math.random()))? 'Пошёл дождь. Возьмите зонт!':'Дождя нет!';

alert(rain);


const mathScores = +prompt('Введите кол-во баллов по математике'),
  russianScores = +prompt('Введите кол-во баллов по русскому языку'),
  computerScienceScores = +prompt('Введите кол-во баллов по информатике');

if (mathScores + russianScores + computerScienceScores >= 265) {
  alert('Поздравляю, вы поступили на бюджет!');
} else {
  alert('Вы не набрали необходимое количество баллов');
}


const billAcceptor = prompt('Сколько денег вы хотите снять?');

if (billAcceptor < 100 || billAcceptor % 100 !== 0) {
  console.log('Сумма не кратна номиналу купюр');
} else {
  console.log('Операция успешна');
}

