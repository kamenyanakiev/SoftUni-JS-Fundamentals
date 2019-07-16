function simpleCalculator(first, second, operation) {
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let result = 0;
  let firstNum = Number(first);
  let secondNum = Number(second);
  if (operation === 'add') {
    result = sum(firstNum, secondNum);
  } else if (operation === 'subtract') {
    result = subtract(firstNum, secondNum);
  } else if (operation === 'multiply') {
    result = multiply(firstNum, secondNum);
  } else if (operation === 'divide'){
    result = divide(firstNum, secondNum);
  }
  console.log(result);
}
simpleCalculator(5, 10, 'multiply');