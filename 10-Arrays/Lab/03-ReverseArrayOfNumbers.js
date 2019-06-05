function reverseArrayOfNumbers(number, array) {
  let reverse = Number(number);
  let newArray = [];
  for (let i = 0; i < reverse; i++) {
    newArray.push(array[i]);
  }
  console.log(newArray.reverse().join(' '));
}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);