function arrayRotation(array, rotation) {
  let rotationNumber = [];
  for (let i = 0; i < rotation; i++) {
    rotationNumber.push(array[0]);
    array.shift();
    array.push(rotationNumber[0]);
    rotationNumber.shift();
  }
  console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);