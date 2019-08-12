function bombNumbers(array, bomb) {
  let numsArray = array.map(Number);
  let bombNumber = Number(bomb[0]);
  let bombPower = Number(bomb[1]);
  for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] === bombNumber) {
      let start = Math.max (0, i - bombPower);
      let end = Math.min (i + bombPower, numsArray.length - 1);
      for (let j = start; j <= end; j++) {
        numsArray[j] = 0;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < numsArray.length; i++) {
    sum += numsArray[i];
  }
  console.log(sum);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1],
  [9, 3]);