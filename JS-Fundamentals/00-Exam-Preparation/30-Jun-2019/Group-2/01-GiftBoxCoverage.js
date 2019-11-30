function giftBoxCoverage(array) {
    const boxSideSize = Number(array.shift());
    const boxArea = (boxSideSize * boxSideSize) * 6;
    const sheetsOfPaper = Number(array.shift());
    const sheetCoverage = Number(array.shift());
    let coveredArea = 0;
    for (let i = 0; i < sheetsOfPaper; i++) {
        if(i % 3 === 0) {
            coveredArea += sheetCoverage * 0.25;
        } else {
            coveredArea += sheetCoverage;
        }
    }
    const result = ((coveredArea / boxArea) * 100);
    console.log(`You can cover ${result.toFixed(2)}% of the box.`); //Judge won't accept this.

    // const sideSize = Number(array.shift());
    // let sheetsOfPaper = Number(array.shift());
    // let singleSheetCoverage = Number(array.shift());
    // let areaOfBox = (sideSize * sideSize) * 6;
    // let areaCovered = 0;
    // for (let i = 1; sheetsOfPaper > 0; i++) {
    //     if (i % 3 === 0) {
    //         areaCovered += (singleSheetCoverage * 0.25);
    //     } else {
    //         areaCovered += singleSheetCoverage;
    //     }
    //     sheetsOfPaper--;
    // }
    // let result = ((areaCovered / areaOfBox) * 100);
    // console.log(`You can cover ${result.toFixed(2)}% of the box.`); //Judge accepts this but it's not correct.
}

giftBoxCoverage(['2.5', '32', '4.25']);