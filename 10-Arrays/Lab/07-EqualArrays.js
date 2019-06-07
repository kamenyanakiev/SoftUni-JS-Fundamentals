function equalArrays(array1, array2) {
  let sum = 0;
  let equal = true;
  let difference = 0;
  for (let i = 0; i < array1.length; i++) {
    if (Number(array1[i]) === Number(array2[i])){
      sum += Number(array1[i]);
    } else if (Number(array1[i]) !== Number(array2[i])){
      difference = i;
      equal = false;
      break;
    }
  }
  if (equal === true){
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${difference} index`);
  }
}
equalArrays(['10', '20', '50'], ['10', '20', '30']);