function nxnMatrix(number) {
    for (let i = 0; i < number; i++) {
        let line = '';
        for (let j = 0; j < number; j++) {
            line += `${number} `;
        }
        console.log(line);
    }
}
nxnMatrix(3);