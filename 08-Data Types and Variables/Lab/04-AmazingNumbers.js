function amazingNumbers(input) {
  let number = input.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  sum = sum.toString().includes('9');
  if (sum) {
    console.log(`${input} Amazing? True`);
  } else {
    console.log(`${input} Amazing? False`);
  }
}
amazingNumbers(999);