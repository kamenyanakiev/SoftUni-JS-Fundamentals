function arrayToNumber(array) {
  let newLenght = array.length - 1;
  let newArray = new Array(newLenght);
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i] + array [i+1];
    array[i] = newArray[i];
  }
  if (array.length > 2){
    for (let j = 0; j < array.length - 1; j++) {
      newArray[j] = array[j] + array [j+1];
      array[j] = newArray[j];
    }
  }
  newArray.pop([newArray.length-1]);
  console.log(newArray.reduce((a, b) => a + b, 0))
}
arrayToNumber([5, 0, 4, 1, 2]);