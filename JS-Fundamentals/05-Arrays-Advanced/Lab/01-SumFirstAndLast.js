function sumFirstAndLast(array) {
  let firstNum = Number(array[0]);
  let lastNum = Number(array.pop());
  console.log(firstNum + lastNum);
}
sumFirstAndLast(['20', '30', '40']);