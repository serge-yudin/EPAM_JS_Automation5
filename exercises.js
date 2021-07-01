//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move

let animal = {};
let cat = {};

animal.move = true;
cat.__proto__ = animal;

console.log(cat.move);

/*
let animal = {
  move: true,
  };
  
let cat = {
  __proto__: animal,
  };
changed for testing purpose
abd
*/

