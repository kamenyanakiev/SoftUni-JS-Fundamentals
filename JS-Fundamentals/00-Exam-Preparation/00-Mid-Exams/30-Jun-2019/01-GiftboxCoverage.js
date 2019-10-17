function giftboxCoverage(array) {
    const sideSize = Number(array.shift());
    let sheetsOfPaper = Number(array.shift());
    let singleSheetCoverage = Number(array.shift());
    let areaOfBox = (sideSize * sideSize) * 6;
    let areaCovered = 0;
    for (let i = 1; sheetsOfPaper > 0; i++) {
        if (i % 3 === 0) {
            areaCovered += (singleSheetCoverage * 0.25);
        } else {
            areaCovered += singleSheetCoverage;
        }
        sheetsOfPaper--;
    }
    let result = ((areaCovered / areaOfBox) * 100)
    console.log(`You can cover ${result.toFixed(2)}% of the box.`);
}
giftboxCoverage([ '2.5', '32', '4.25' ]);