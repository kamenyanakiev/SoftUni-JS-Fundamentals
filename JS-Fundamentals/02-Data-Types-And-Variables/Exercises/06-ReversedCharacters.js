function reversedCharacters(firstChar, secondChar, thirdChar) {
	let chars = firstChar + secondChar + thirdChar;
	let reversedChars = chars.split('').reverse().join(' ');
	console.log(reversedChars);
}
reversedCharacters('A', 'B', 'C');