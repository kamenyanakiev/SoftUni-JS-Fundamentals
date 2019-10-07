function magicMatrices(matrix) {
    let length = matrix.length;
    let isEqual = true;
    let magicSum = 0;
    for (let i = 0; i < length; i++) {
        let rowSum = 0;
        for (let j = 0; j < length; j++) {
            if (i === 0){
                magicSum += Number(matrix[i][j]);
            } 
            rowSum += Number(matrix[i][j])
        }
        for (let k = 0; k < length; k++) {
            let columnSum = 0;
            for (let l = 0; l < length; l++) {
                columnSum += Number(matrix[l][i]);
            }
            if (magicSum !== columnSum || magicSum !== rowSum) {
                isEqual = false;
                break;
            }
        }
    }
    console.log(isEqual);
}
magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]])