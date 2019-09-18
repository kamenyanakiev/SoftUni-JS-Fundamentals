function arithmephile(input) {
  let number = 0;
  let numberCounter = 0;
  let maxNumber = 0;
  let nextNumber = 0;
  for (let i = 0; i < input.length; i++) {
    number = Number(input[i]);
    if (number > 0 && number < 10) {
      numberCounter = i + 1;
      nextNumber = Number(input[numberCounter]);
      for (let j = 0; j < number; j += 2) {
        nextNumber *= Number(input[numberCounter + 1]);
        numberCounter++;
      }
      if (nextNumber > maxNumber) {
        maxNumber = nextNumber;
        nextNumber = 0;
      }
    }
  }
  console.log(maxNumber);
}
arithmephile(['100', '200', '3', '2', '3', '2', '1', '1']);