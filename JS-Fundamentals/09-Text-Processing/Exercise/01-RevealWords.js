function revealWords(words, censoredString) {
    words = words.split(', ');
    for (const word of words) {
        censoredString = censoredString.replace('*'.repeat(word.length), word);
    }
    console.log(censoredString);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');