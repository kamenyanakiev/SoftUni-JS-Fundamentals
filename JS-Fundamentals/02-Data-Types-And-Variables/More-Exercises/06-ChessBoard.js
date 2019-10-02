function chessBoard(number) {
  let identation = 2;
  printBaseStart();
  for (let i = 1; i <= Number(number); i++) {
    let counter = i;
    console.log(`${" ".repeat(identation)}<div>`);
    for (let j = 1; j <= Number(number); j++) {
      printSpans(counter);
      counter++;
    }
    console.log(`${" ".repeat(identation)}</div>`);
  }
  printBaseEnd();

  function printBaseStart() {
    console.log('<div class="chessboard">');
  }

  function printBaseEnd() {
    console.log("</div>");
  }

  function printSpans(counter) {
    let types = {
      0: 'white',
      1: 'black'
    }
    let result = `${" ".repeat(identation + identation)}<span class="${types[counter % 2]}"></span>`
    console.log(result);
  }
}
chessBoard(4);