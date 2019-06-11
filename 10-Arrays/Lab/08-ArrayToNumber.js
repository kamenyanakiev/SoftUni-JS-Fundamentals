function arrayToNumber(array) {
  let newLenght = array.length - 1;
  let newArray = new Array(newLenght);
  if (array.length === 1){
    console.log(array[0]);
  }
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i] + array [i+1];
    array[i] = newArray[i];
  }
  if (array.length > 2){
    arrayToNumber(newArray);
  }
  if (newArray.length === 1){
    console.log(newArray[0]);
  }
}
arrayToNumber([1, 5, 1, 2, 4]);