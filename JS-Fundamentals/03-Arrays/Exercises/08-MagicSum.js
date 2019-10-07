function magicSum(array, number) {
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i ; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === number && j !== i) {
        console.log(`${firstNum} ${secondNum}`);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);