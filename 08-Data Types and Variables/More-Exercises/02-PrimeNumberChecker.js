function primeNumberChecker(number) {
  let checker = true;
  for (let i = 2; i < number; i++){
    if (number % i === 0) {
      checker = false;
    }
  }
  console.log(checker);
}
primeNumberChecker(81);