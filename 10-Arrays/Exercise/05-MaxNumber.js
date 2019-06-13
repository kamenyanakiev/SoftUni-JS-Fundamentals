function maxNumber(array) {
  let newArray = [];
  for (let i = 0; i < 3; i++) {
    newArray.push(Math.max.apply(null, array));
    for (let j = 0; j < array.length; j++) {
      if (array[j] === newArray[i]){
        array.pop(array[j]);
      } else {
        continue;
      }
    }
  }
  console.log(newArray.join(' '));
}
maxNumber([1, 2, 3, 4]);