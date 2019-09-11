function santasCookies(array) {
  const amountOfBatches = Number(array.shift());
  const INGREDIENTTABLE = {
    SINGLECOOKIE: 25,
    CUP: 140,
    SMALLSPOON: 10,
    BIGSPOON: 20,
    COOKIESPERBOX: 5
  }
  let readyBoxes = 0;
  for (let i = 0; i < amountOfBatches; i++) {
    const flourInGrams = Number(array.shift());
    const sugarInGrams = Number(array.shift());
    const cocoaInGrams = Number(array.shift());
    const flourCup = Math.floor(flourInGrams / INGREDIENTTABLE.CUP);
    const sugarSpoons = Math.floor(sugarInGrams / INGREDIENTTABLE.BIGSPOON);
    const cocoaSpoons = Math.floor(cocoaInGrams / INGREDIENTTABLE.SMALLSPOON);
    const result = (INGREDIENTTABLE.CUP + INGREDIENTTABLE.SMALLSPOON + INGREDIENTTABLE.BIGSPOON) *
      (Math.min(flourCup, sugarSpoons, cocoaSpoons)) / INGREDIENTTABLE.SINGLECOOKIE;
    const currentBoxes = Math.floor(result / INGREDIENTTABLE.COOKIESPERBOX);
    if (flourCup === 0 || sugarSpoons === 0 || cocoaSpoons === 0) {
      console.log('Ingredients are not enough for a box of cookies.');
    } else {
      readyBoxes += currentBoxes;
      console.log(`Boxes of cookies: ${currentBoxes}`);
    }
  }
  console.log(`Total boxes: ${readyBoxes}`);

}
santasCookies(['2', '200', '300', '500', '100', '200', '50']);