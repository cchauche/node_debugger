'use strict'

let addsDone = 0;

const add = (num1, num2) => {
  addsDone++;
  return num1 + num2
}

const multiply = (num1, num2) => {
  let result = 0;
  while (num2 > 0) {
    result += add(result, num1);
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

// ================ TESTS ================ //

const logTest = (testName, expected, result) => {
  let pass = expected === result;
  let color = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m'
  console.log(color, '* ' + testName);
  console.log(`-- ${pass} | Expected "${expected}" and got "${result}"`)
}

logTest('Add 2 + 3 should equal 5', 5, add(2,3))
logTest('Multiply 2x5 should equal 10', 10, multiply(2,5))
logTest('Raise 2 to the 4th should equal 16', 16, raiseToRecursive(2,4))
console.log('Adds Done: ', addsDone, '\n');
