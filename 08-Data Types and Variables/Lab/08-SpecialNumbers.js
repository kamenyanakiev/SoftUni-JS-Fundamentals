function specialNumbers(input) {
  for (let i = 1; i <= input; i++) {
    if (i.toString().length === 1){
      if(i === 5 || i === 7){
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    } else if (i.toString().length > 1){
      let number = i.toString();
      let firstNumber = Number(number[0]);
      let secondNumber = Number(number[1]);
      if (firstNumber + secondNumber === 5 || firstNumber + secondNumber === 7 || firstNumber + secondNumber === 11){
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }  
    }
  }
}
specialNumbers(50);