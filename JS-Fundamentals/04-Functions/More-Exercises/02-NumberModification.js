function numberModification(input) {
  let number = String(input);
  let sum = averageChecker(number);

  while (sum < 5) {
    number += '9';
    sum = averageChecker(number);
  }
  console.log(number);

  function averageChecker(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += Number(number[i]);
    }
    sum /= number.length;
    return sum;
  }
}
numberModification(101);