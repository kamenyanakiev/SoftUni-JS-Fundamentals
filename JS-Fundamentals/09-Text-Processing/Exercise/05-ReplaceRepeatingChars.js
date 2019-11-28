function replaceRepeatingChars(input) {
    let result = `${input[0]}`;
    let resultCounter = 0;
    for (let i = 1; i < input.length; i++) {
        const currentChar = input[i];
        let lastChar = result[resultCounter];
        if (currentChar !== lastChar) {
            result += `${currentChar}`;
            resultCounter++;
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');