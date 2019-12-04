function messageDecypher(array) {
    array.shift();
    let firstChecker = /(^\$[A-Z]{1}[a-z]+\$: \[[0-9]+\]\|\[[0-9]+\]\|\[[0-9]+\]\|$)/;
    let secondChecker = /(^\%[A-Z]{1}[a-z]+\%: \[[0-9]+\]\|\[[0-9]+\]\|\[[0-9]+\]\|$)/;
    let numsDecrypher = /\[[0-9]+\]\|/;
    array.forEach(element => {
        if (element.match(firstChecker)) {
            let [empty, name, nums] = element.split('$');
            console.log(nums.split(numsDecrypher));
            
            console.log(name);
        } else if (element.match(secondChecker)) {
            let [empty, name, nums] = element.split('%');
            console.log(element);
        } else {
            console.log('Valid message not found!');
        }
    });
}
messageDecypher([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
  ]);