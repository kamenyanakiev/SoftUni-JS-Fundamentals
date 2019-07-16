function simpleCalculator(first, second, operation) {
  let firstNum = Number(first);
  let secondNum = Number(second);
  if (operation === 'add') {
    calculator = (a, b) => a + b;
  } else if (operation === 'subtract') {
    calculator = (a, b) => a - b;
  } else if (operation === 'multiply') {
    calculator = (a, b) => a * b;
  } else if (operation === 'divide'){
    calculator = (a, b) => a / b;
  }
  console.log(calculator(firstNum, secondNum));
}
simpleCalculator(5, 10, 'multiply');