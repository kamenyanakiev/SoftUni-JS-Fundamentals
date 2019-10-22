function searchForANumber(numsArray, secondArray) {
    const toBeAdded = Number(secondArray.shift());
    const toBeRemoved = Number(secondArray.shift());
    const toBeSearched = Number(secondArray.shift());
    let newArray = [];
    let numberOccurances = 0;
    for (let i = 0; i < toBeAdded; i++) {
        newArray.push(numsArray[i]);
    }
    newArray.splice(0, toBeRemoved);
    newArray.forEach(element => {
        if (Number(element) === toBeSearched) {
            numberOccurances++;
        }
    });
    console.log(`Number ${toBeSearched} occurs ${numberOccurances} times.`);
}
searchForANumber([ 5, 2, 3, 4, 1, 6 ], [ 5, 2, 3 ]);