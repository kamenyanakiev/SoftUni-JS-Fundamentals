function repeatString(string, repeats) {
    let result = '';
    for (let i = 0; i < Number(repeats); i++) {
        result += string;
    }
    console.log(result);
}
repeatString('abc', 3);