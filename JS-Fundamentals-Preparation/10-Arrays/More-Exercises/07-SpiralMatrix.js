function spiralMatrix(a, b) {
    let width = Number(a);
    let height = Number(b);
    let number = 1;
    let end = width * height;
    let resultMatrix = [];
    let startCol = 0;
    let endCol = width - 1;
    let startRow = 0;
    let endRow = height - 1;
    for (let i = 0; i < width; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < height; j++) {
            resultMatrix[i].push(0);
        }
    }
    while (number <= end) {
        for (let i = startCol; i <= endCol; i++) {
            resultMatrix[startRow][i] = number;
            number++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            resultMatrix[j][endCol] = number;
            number++;
        }
        endCol--;
        for (let k = endCol; k >= startCol; k--) {
            resultMatrix[endRow][k] = number;
            number++;
        }
        endRow--;
        for (let l = endRow; l >= startRow; l--) {
            resultMatrix[l][startCol] = number;
            number++;
        }
        startCol++;
    }
    for (let i = 0; i < resultMatrix.length; i++) {
        console.log(resultMatrix[i].join(' '));
    }
}
spiralMatrix(5, 5);