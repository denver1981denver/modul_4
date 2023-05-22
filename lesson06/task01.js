'use strict';

// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'],
  failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
let style = 'font-size: 30px; color: gold;';

const filter = (all, failed) => {

  const passedExamStudents = [];

  const getStudentIdentification = (student) => {
    for (const elem of failed) {
      if (student === elem) {
        return false;
      }
    }
  
    return true;
  };

  for (const elem of all) {
    if (getStudentIdentification(elem)) {
      passedExamStudents.push(elem);
    }
  }

  return passedExamStudents;
}

const examResults = filter(allStudents, failedStudents);

console.log('%cСписок студентов сдавших экзамен', style);
console.table(examResults);











  




