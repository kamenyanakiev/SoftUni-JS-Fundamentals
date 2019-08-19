function theFinalQuest(array) {
  let sentance = array.shift().split(' ');
  for (const line of array) {
    let tokens = line.split(' ');
    let command = tokens[0];
    if (command === 'Delete') {
      let deleteIndex = Number(tokens[1]);
      deleteWord(deleteIndex);
    } else if (command === 'Swap') {
      let firstWord = tokens[1];
      let secondWord = tokens[2];
      swapWord(firstWord, secondWord);
    } else if (command === 'Put') {
      let word = tokens[1];
      let index = Number(tokens[2]);
      putWord(word, index);
    } else if (command === 'Sort') {
      sentance.sort(sortWords);
    } else if (command === 'Replace') {
      let firstWord = tokens[1];
      let secondWord = tokens[2];
      replaceWord(firstWord, secondWord);
    } else if (command === 'Stop') {
      break;
    }
  }
  console.log(sentance.join(' '));
  
  function deleteWord(index) {
    if (index < sentance.length && index >= 0) {
      sentance.splice(index + 1, 1);
    }
  }
  function swapWord(firstWord, secondWord) {
    let indexOfFirst = sentance.indexOf(firstWord);
    let indexOfSecond = sentance.indexOf(secondWord);
    if (indexOfFirst >= 0 && indexOfSecond >= 0) {
      sentance[indexOfFirst] = secondWord;
      sentance[indexOfSecond] = firstWord;
    }
  }
  function putWord(word, index) {
    index--;
    if (index >= 0 && index <= sentance.length) {
      sentance.splice(index, 0, word);
    }
  }
  function sortWords(a, b) {
    return b.localeCompare(a);
  }
  function replaceWord(firstWord, secondWord) {
    let indexOfWord = sentance.indexOf(secondWord);
    if (indexOfWord >= 0 && indexOfWord < sentance.length) {
      sentance[indexOfWord] = firstWord;
    }
  }
}
theFinalQuest([ 'Congratulations! You last also through the have challenge!', 
'Swap have last', 'Replace made have', 'Delete 2', 'Put it 4', 'Stop']);