function messageDecypher(array) {
    array.shift();
    let firstChecker = /(^\$[A-Z]{1}[a-z]{2,}\$: \[[0-9]+\]\|\[[0-9]+\]\|\[[0-9]+\]\|$)/;
    let secondChecker = /(^\%[A-Z]{1}[a-z]{2,}\%: \[[0-9]+\]\|\[[0-9]+\]\|\[[0-9]+\]\|$)/;
    array.forEach(element => {
        if (element.match(firstChecker)) {
            let [empty, type, numString] = element.split('$');
            printResult(type, numString);

        } else if (element.match(secondChecker)) {
            let [empty, type, numString] = element.split('%');
            printResult(type, numString)
        } else {
            console.log('Valid message not found!');
        }
    });

    function printResult(type, numString) {
        let nums = numString.split(':')[1].split('|');
        let result = '';
        nums.forEach(number => {
            number  = number.replace(/\s/g, '');
            let splitNum = number.split('');
            splitNum.shift();
            splitNum.pop();
            splitNum = splitNum.join('');
            let char = String.fromCharCode(Number(splitNum));
            result += char;
        });
        console.log(`${type}: ${result}`);
    }
}

messageDecypher([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
  ]);