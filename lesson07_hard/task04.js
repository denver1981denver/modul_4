'use strict';

const getleapYears = (n, m) => {
  const arrayEars = [];
   
  for (let i = Math.min(n, m); i <= Math.max(n, m); i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
      arrayEars.push(i);
    }
  }

  return arrayEars;
}

console.log(getleapYears(1900, 2024));





