function sortTwoSmallestNums(array) {
  let sortedArray = array.sort((a, b) => a - b);
  console.log(sortedArray
    .splice(0, 2)
    .join(' ')
    );
}
sortTwoSmallestNums([30, 15, 50, 5]);