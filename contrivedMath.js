'use strict'

let addsDone = 0;

const add = (num1, num2) => {
  addsDone++;
  return num1 + num2
}

const multiply = (num1, num2) => {
  let result = 0;
  while (num2 > 0) {
    result = add(result, num1);
    num2 -= 1;
  }
  return result
}

const raiseToRecursive = (base, exponent) => {
  if(exponent === 0) {
    return 1
  }
  return multiply(base, raiseToRecursive(base, exponent - 1))
}

console.log('Add 1 + 1: ', add(1,1));
console.log('Multiply 2x5: ', multiply(2,5));
console.log('Raise 2 to the 3rd: ', raiseToRecursive(2,5));
console.log('Adds Done: ', addsDone);
