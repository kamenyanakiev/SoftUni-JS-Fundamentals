function factorialDivision(a, b) {
  let firstNum = Number(a);
  let secondNum = Number(b);
  let firstFactorial = 1;
  let secondFactorial = 1;
  if (firstNum > 1) {
    while (firstNum > 1) {
      firstFactorial *= firstNum;
      firstNum--;
    }
  }
  if (secondNum > 1){
    while (secondNum > 1){
      secondFactorial *= secondNum;
      secondNum--;
    }
  }
  console.log(`${(firstFactorial / secondFactorial).toFixed(2)}`);
}
factorialDivision(5, 2);