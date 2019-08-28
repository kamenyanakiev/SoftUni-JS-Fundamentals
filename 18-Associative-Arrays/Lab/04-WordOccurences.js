function wordOccurences(array) {
  let words = {};
  array.forEach(word =>
    words.hasOwnProperty(word) ? words[word]++ : (words[word] = 1)
  );
  let keysSorted = Object.keys(words).sort(function (a, b) {
    return words[b] - words[a];
  });
  keysSorted.forEach(word => console.log(`${word} -> ${words[word]} times`));
}
wordOccurences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'sentence',
  'And',
  'finally',
  'the',
  'third',
  'sentence'
]);