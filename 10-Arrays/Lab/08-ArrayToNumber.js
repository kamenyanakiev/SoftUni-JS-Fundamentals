function arrayToNumber(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i] + array [i+1];
  } 
  if (newArray.length === 1){
    console.log(newArray[0]);
  } else if (array.length === 1){
    console.log(array[0]);
  } else {
    arrayToNumber(newArray);
  } 
}
arrayToNumber([5, 0, 4, 1, 2]);