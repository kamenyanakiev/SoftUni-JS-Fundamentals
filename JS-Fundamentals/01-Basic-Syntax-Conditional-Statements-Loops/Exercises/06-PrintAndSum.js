function printAndSum(start, end) {
    let sum = 0;
    let num = '';
    for (let i = start; i <= end; i++) {
        sum += start;
        num = num + start + ' ';
        start++;
    }
    console.log(num);
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);