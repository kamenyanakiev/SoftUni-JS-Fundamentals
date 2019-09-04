function stringSubstring(word, string) {
  string = string.toLowerCase();
  string.includes(word.toLowerCase()) ? console.log(word) : console.log(`${word} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');