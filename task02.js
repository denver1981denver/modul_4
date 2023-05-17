'use strict';

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример:  "привет Мир" => "Привет мир"

const getModifyString = string => string = string[0].toUpperCase() + string.slice(1).toLowerCase();

alert(getModifyString(prompt('Введите строку')));