function chessBoard(number) {
  let counter = 1;
  console.log('<div class="chessboard">');
  for (let i = 0; i < Number(number); i++) {
    console.log('  <div>');
    for (let j = 0; j < Number(number); j++) {
      if (counter % 2 === 0){
        console.log('    <span class="white"></span>'); 
      } else {
        console.log('    <span class="black"></span>'); 
      }
      counter++;
    }
    console.log('  </div>');
  }
  console.log('</div>');
}
chessBoard(4);