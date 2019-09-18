function removeOccurances(word, string) {
  let result = string;
  while (result.includes(word)) {
    result = result.replace(word, '');
  }
  console.log(result);
}
removeOccurances('ice', 'kicegiciceeb');