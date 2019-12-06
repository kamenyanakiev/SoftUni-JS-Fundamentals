function messageDecypher(array) {
    array.shift();
    let firstChecker = /(\*[A-Z]{1}[a-z]{2,}\*: \[[A-z]\]\|\[[A-z]\]\|\[[A-z]\]\|$)/;
    let secondChecker = /(\@[A-Z]{1}[a-z]{2,}\@: \[[A-z]\]\|\[[A-z]\]\|\[[A-z]\]\|$)/;
    array.forEach(element => {
        if (element.match(firstChecker)) {
            let [empty, type, charString] = element.split('*');
            printResult(type, charString);

        } else if (element.match(secondChecker)) {
            let [empty, type, charString] = element.split('@');
            printResult(type, charString);
        } else {
            console.log('Valid message not found!');
        }
    });

    function printResult(type, charString) {
        let chars = charString.split(':')[1].split('|');
        let result = '';
        chars.forEach(char => {
            if (char) {
                char = char.replace(/\s/g, '');
                let splitChar = char.split('');
                splitChar.shift();
                splitChar.pop();
                splitChar = splitChar.join('');
                let num = splitChar.charCodeAt(0);
                result += `${num} `; 
            }
        });
        console.log(`${type}: ${result}`);
    }
}

messageDecypher([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ]);