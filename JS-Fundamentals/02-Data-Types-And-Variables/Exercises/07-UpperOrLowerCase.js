function upperOrLowerCase(letter) {
	let lowerLetter = letter.toLowerCase();
	if (lowerLetter === letter) {
		console.log('lower-case');
	} else {
		console.log('upper-case');
	}
}
upperOrLowerCase('i');