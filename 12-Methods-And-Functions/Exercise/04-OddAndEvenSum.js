function oddAndEvenSum(input) {
  let oddSum = 0;
  let evenSum = 0;
  let stringInput = String(input);
  for (let i = 0; i < stringInput.length; i++) {
    let number = Number(stringInput[i]);
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);