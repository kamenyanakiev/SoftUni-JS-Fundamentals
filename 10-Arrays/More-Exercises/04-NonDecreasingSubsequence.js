function nonDecreasingSubsequence(array) {
  let numsCounter = 0;
  let newArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    let num = Number(array[i]);
    if (num >= newArray[numsCounter]) {
      newArray.push(num);
      numsCounter++;
    }
  }
  console.log(newArray.join(' '));
}
nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);