function pointsValidation(coordinates){
    const x1 = Number(coordinates[0]);
    const y1 = Number(coordinates[1]);
    const x2 = Number(coordinates[2]);
    const y2 = Number(coordinates[3]);
    if (x1 === 0 || y1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (x2 === 0 || y2 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if ((x1 === x2 || x1 === y2) || (y1 === x2 || y1 === y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([2, 1, 1, 1]);