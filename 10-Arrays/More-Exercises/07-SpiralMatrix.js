function spiralMatrix(params) {
    let width = Number(params[0]);
    let height = Number(params[1]);
    let start = 1;
    let end = width * height;
    let resultMatrix = new Array(width);
    let left = width;
    let down = height;
    let up = height -1;
    let right = width -1;
    let currentLeft = 0;
    let currentDown = 1;
    let currentUp = 0;
    let currentRight = 0
    for (let i = 0; i < width; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < height; j++) {
            resultMatrix[i].push(0);
        }
    }
    while (start <= end) {
        for (let i = 0; i < width; i++) {
            resultMatrix[currentLeft][i] = start;
            start ++;
        }
        for (let j = currentDown; j < height; j++) {
            resultMatrix[currentDown][j] = start;
            start++;
            
        }
        
    }

   
    console.log(resultMatrix);
}
spiralMatrix([5, 5]);