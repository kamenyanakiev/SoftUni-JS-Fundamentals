function modernTimesOfHashTag(string) {
  const stringArray = string.split(' ');
  for (const word of stringArray) {
    printHashTag(word);
  }

  function printHashTag(word) {
    const checker = /^#[a-zA-Z]/;
    if (word.match(checker)) {
      const result = word.slice((1));
      console.log(result);
    }
  }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');