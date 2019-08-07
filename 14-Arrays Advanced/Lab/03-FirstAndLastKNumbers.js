function firstAndLastKNumbers(array) {
  array.map(Number);
  let neededNumbers = array.shift();
  let startNumbers  = [];
  let lastNumbers = [];
  for (let i = 0; i < neededNumbers; i++) {
    startNumbers.push(array[i]);
  }
  for (let i = array.length - (neededNumbers); i <= array.length; i++) {
    lastNumbers.push(array[i]);
  }
  console.log(startNumbers.join(' '));
  console.log(lastNumbers.join(' '));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);