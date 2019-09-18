function wordsTracker(array) {
  let trackedWords = array.shift().split(' ');
  let wordsCount = {};
  for (let word of trackedWords) {
    wordsCount[word] = 0;
  }
  array.forEach(currentWord => {
    if (wordsCount.hasOwnProperty(currentWord)){
      wordsCount[currentWord]++;
    }
  });
  let sortedWords = Object.entries(wordsCount);
  sortedWords.sort((a, b) => b[1] - a[1]);
  sortedWords.forEach(element => {
    console.log(`${element[0]} - ${element[1]}`);
  });
}
wordsTracker([
  'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the',
  'words','this','and','sentence','because','this','is','your','task'
  ]);