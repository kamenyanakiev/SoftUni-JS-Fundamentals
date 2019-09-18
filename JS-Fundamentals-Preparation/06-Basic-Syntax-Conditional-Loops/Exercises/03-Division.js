function division(number) {
  if (number % 10 === 0) {
    console.log('The number is divisible by 10');
    return;
  } else if (number % 7 === 0) {
    console.log('The number is divisible by 7');
    return;
  } else if (number % 6 === 0) {
    console.log('The number is divisible by 6');
    return;
  } else if (number % 3 === 0) {
    console.log('The number is divisible by 3');
    return;
  } else if (number % 2 === 0) {
    console.log('The number is divisible by 2');
    return;
  } else {
    console.log('Not divisible');
  }
}
division(30);