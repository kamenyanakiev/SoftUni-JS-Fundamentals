function palindromeIntegers(array) {
    array = String(array);
    let numbersArray = array.split(',');
    for (let i = 0; i < numbersArray.length; i++) {
        let reverseArray = numbersArray[i].split('').reverse().join('');
        let number = numbersArray[i];
        if (number === reverseArray) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);