function maxSequenceOfEqual(array) {
  let currentBiggest = [];
  let nextNums = [];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];
    if (currentNum === nextNum) {
      if (nextNums.length > 1) {
        nextNums.push(nextNum);
      } else {
        nextNums.push(currentNum, nextNum);
      }
    } else {
      nextNums = [];
      nextNums.push(currentNum);
    }
    if (currentBiggest.length < nextNums.length) {
      currentBiggest = nextNums;
    } else {
      continue;
    }
  }
  console.log(currentBiggest.splice(1).join(' '));
}
maxSequenceOfEqual([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);