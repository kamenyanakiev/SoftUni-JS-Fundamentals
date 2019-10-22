function negativeOrPositive(array) {
  array.map(Number);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArray.unshift(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
  }
}
negativeOrPositive([3, -2, 0, -1]);