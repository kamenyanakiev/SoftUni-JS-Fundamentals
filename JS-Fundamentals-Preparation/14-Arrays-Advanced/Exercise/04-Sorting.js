function sorting(array) {
 let numArray = array.map(Number);
 let sortedArray = [];
  numArray.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 ) {
      sortedArray.push(numArray[0]);
      numArray.shift();
    } else {
      sortedArray.push(numArray[numArray.length-1]);
      numArray.pop();
    }
  }

//               Alt. method
//   for (let i = 0; i < array.length; i++) {
//     let maxNum = Math.max(...numArray);
//     let minNum = Math.min(...numArray);
//     if (i % 2 === 0) {
//       sortedArray.push(maxNum);
//       numArray.splice(numArray.indexOf(maxNum), 1);
//     } else {
//       sortedArray.push(minNum);
//       numArray.splice(numArray.indexOf(minNum), 1);
//     }
//   }

  console.log(sortedArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);