function nthElement(array) {
  let newArray = array;
  let step = Number(newArray.pop());
  let shiftedArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (i % step === 0) {
      shiftedArray.push(newArray[i]);
    }
  }
  console.log(shiftedArray.join(' '));
}
nthElement(['5', '20', '31', '4', '20', '2']);