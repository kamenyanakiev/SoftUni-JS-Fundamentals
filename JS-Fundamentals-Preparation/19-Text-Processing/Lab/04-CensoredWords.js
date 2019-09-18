function censoredWords(string, word) {
  let replacement = '*'.repeat(word.length);
  let censored = string.replace(word, replacement);
  while (censored.includes(word)) {
    censored = censored.replace(word, replacement);
  }
  console.log(censored);
}
censoredWords('A small sencence with some words', 'small')