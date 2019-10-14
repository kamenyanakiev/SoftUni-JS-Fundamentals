function addAndSubtract(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    thirdNum = Number(thirdNum);
    let result = 0;
    result = sum(firstNum, secondNum);
    console.log(subtract(result, thirdNum));
}
addAndSubtract(23, 6, 10);