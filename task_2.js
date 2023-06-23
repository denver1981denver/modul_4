'use strict';

const getArrRandomNum = arr => {
  arr.push(Math.floor(Math.random() * 11));
  const result = arr.reduce((sum, current) => sum + current, 0);
  if (result >= 50) return arr;

  return getArrRandomNum(arr);
};

console.log(getArrRandomNum([]));


