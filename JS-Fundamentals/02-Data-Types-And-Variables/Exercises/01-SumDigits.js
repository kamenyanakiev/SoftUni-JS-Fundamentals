function sumDigits(input) {
	let numbers = input.toString().split('');
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += Number(numbers[i]);
	}
	console.log(sum);
}
sumDigits(245678);