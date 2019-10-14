function wrongResult(firstNum, secondNum, thirdNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    thirdNum = Number(thirdNum);
    if (firstNum > 0 && secondNum > 0 && thirdNum > 0) {
        console.log('Positive');
    } else if ((firstNum < 0 && (secondNum < 0 || thirdNum < 0) &&
    (secondNum > 0 || thirdNum > 0)) || 
    (firstNum > 0 && secondNum < 0 && thirdNum < 0)) {
        console.log('Positive');
    } else if (firstNum === 0 || secondNum === 0 || thirdNum === 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
wrongResult(-1, 0, 1);