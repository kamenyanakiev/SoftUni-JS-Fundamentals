function processOddNumbers(array) {
  let result = array
    .filter((number, i) => i % 2 === 1)
    .map(x => x * 2)
    .reverse();
  console.log(result.join(' '));
}
processOddNumbers([3, 0, 1, 10, 4, 7, 3]);