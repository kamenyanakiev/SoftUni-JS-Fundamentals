function sortNumbers (a, b, c) {
    [a, b, c].sort((a, b) => a - b).reverse().forEach(number => console.log(number));
}
sortNumbers(1, 10, 7)