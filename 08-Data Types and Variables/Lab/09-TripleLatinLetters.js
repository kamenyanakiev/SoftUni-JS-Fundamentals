function tripleLatinLetters(input) {
  for (let i = 0; i < input; i++) {

    for (let j = 0; j < input; j++) {
      
      for (let k = 0; k < input; k++) {
        console.log(`${String.fromCharCode(97 + i)}${String.fromCharCode(97 + j)}${String.fromCharCode(97 + k)}`);
      } 
    }
  }
}
tripleLatinLetters(3);