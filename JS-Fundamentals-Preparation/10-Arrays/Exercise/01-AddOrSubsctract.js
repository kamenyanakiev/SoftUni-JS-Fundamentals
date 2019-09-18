function addOrSubstract(array) {
  let newArray = [];
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < array.length; i++) {
    firstSum += array[i];
    if (array[i] % 2 === 0) {
      newArray.push(array[i] + i);
    } else {
      newArray.push(array[i] - i);
    }
    secondSum += newArray[i];
  }
  console.log(newArray);
  console.log(firstSum);
  console.log(secondSum);
}
addOrSubstract([5, 15, 23, 56, 35]);