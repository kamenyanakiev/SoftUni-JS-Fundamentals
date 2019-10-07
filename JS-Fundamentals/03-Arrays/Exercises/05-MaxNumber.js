function maxNumber(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let bigger = true;
    for (let j = i; j < array.length; j++) {
      if (number <= array[j + 1]) {
        bigger = false;
      } else {
        continue;
      }
    }
    if (bigger) {
      newArray.push(number);
    } else {
      continue;
    }
  }
  console.log(newArray.join(' '));
}
maxNumber([41, 41, 34, 20]);