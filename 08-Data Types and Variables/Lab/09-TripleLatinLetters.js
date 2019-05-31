function tripleLatinLetters(input) {
  let nums = {
    numOne: 0,
    numTwo: 0,
    numThree: 0
  }
  let letters = {
    firstLetter: String.fromCharCode(97 + nums.numOne),
    secondLetter: String.fromCharCode(97 + nums.numTwo),
    thirdLetter: String.fromCharCode(97 + nums.numThree)
  }
  for (let i = 0; i <= input; i++) {

    for (let j = 0; j < input; j++) {
      
      for (let k = 0; k < input; k++) {
        console.log(`${letters.firstLetter}${letters.secondLetter}${letters.thirdLetter}`);
        nums.numThree++;
      }
      
    }
    
  }
}
tripleLatinLetters(3);