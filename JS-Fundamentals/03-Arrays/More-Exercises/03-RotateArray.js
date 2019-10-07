function rotateArray(array) {
  let rotations = Number(array[array.length -1]);
  array.pop();
  let newArray = [];
  for (let i = 0; i < rotations; i++) {
    newArray.push(array[array.length -1]);
    array.unshift(newArray[0]);
    newArray.shift();
    array.pop();
  }
  console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);