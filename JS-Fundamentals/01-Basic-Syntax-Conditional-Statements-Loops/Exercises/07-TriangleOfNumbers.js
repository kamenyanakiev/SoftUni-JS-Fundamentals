function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let output = '';
        for (let j = 1; j <= i; j++) {
            output += i + ' ';
        }
        console.log(output);
    }
}
triangleOfNumbers(3);