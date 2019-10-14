function perfectNumber(number) {
    let perfectChecker = 0;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            perfectChecker += i;
        }
    }
    if (perfectChecker === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);