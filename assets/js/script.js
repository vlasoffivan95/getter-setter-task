// // // //Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:

// // // from(число) 5
// // // to(число) 50
// // // Реализовать геттеры и сеттеры для обоих свойств.
// // // Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
// // // Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, 
// //если оно входит в диапазон. 
// // //И кинет ошибку, если не входит.
// // // Bonus tasks:
// // // Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
// // // Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to.


"use strict";

class RangeValidator {
  #from;
  #to;
  constructor(from, to) {
    this.from = from;
    this.to = to;
  };

  get range() {
    return [this.from, this.to];
  };

  get from() {
    return this.#from;
  };

  get to() {
    return this.#to;
  };

  set from(valueFrom) {
    if (valueFrom > this.#to) {
      throw new TypeError('Number TO must be greater number FROM')
    };
    if (typeof valueFrom !== 'number' || isNaN(valueFrom)) {
      throw new TypeError('The variable must be of type number')
    };
    this.#from = valueFrom;
  };

  set to(valueTo) {
    if (typeof valueTo !== 'number' || isNaN(valueTo)) {
      throw new TypeError('The variable must be of type number')
    };
    if (valueTo < this.#from) {
      throw new TypeError('Number TO must be greater number FROM')
    };
    this.#to = valueTo;
  };

  validate(num) {
    if (this.#from <= num && num <= this.#to) {
      return num;
    }
    throw new RangeError('The number is not within the limit!')
  };
};


const testValue = new RangeValidator(5, 30);
console.log(testValue);
console.log(testValue.validate(10));

