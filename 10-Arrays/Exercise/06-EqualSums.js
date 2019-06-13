function equalSums(array) {
  let equalChecker = true;
  for (let i = 0; i < array.length; i++) {
    let firstSum = 0;
    let secondSum = 0;
    for (let j = i - 1; j >= 0; j--) {
      firstSum += array[j];
    }
    for (let k = i + 1; k < array.length; k++) {
      secondSum += array[k];
    }
    if (firstSum === secondSum){
      console.log(i);
      equalChecker = false;
      break;
    } 
  }
  if (equalChecker){
    console.log('no');
  }
}
equalSums([1, 2, 3, 3])