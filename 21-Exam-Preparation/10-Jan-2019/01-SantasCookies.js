function santasCookies(array) {
  const amountOfBatches = Number(array.shift());
  const INGREDIENT_TABLE = {
    SINGLE_COOKIE: 25,
    CUP: 140,
    SMALL_SPOON: 10,
    BIG_SPOON: 20,
    COOKIES_PER_BOX: 5
  }
  let readyBoxes = 0;
  for (let i = 0; i < amountOfBatches; i++) {
    const flourInGrams = Number(array.shift());
    const sugarInGrams = Number(array.shift());
    const cocoaInGrams = Number(array.shift());
    const flourCup = Math.floor(flourInGrams / INGREDIENT_TABLE.CUP);
    const sugarSpoons = Math.floor(sugarInGrams / INGREDIENT_TABLE.BIG_SPOON);
    const cocoaSpoons = Math.floor(cocoaInGrams / INGREDIENT_TABLE.SMALL_SPOON);
    const result = (INGREDIENT_TABLE.CUP + INGREDIENT_TABLE.SMALL_SPOON + INGREDIENT_TABLE.BIG_SPOON) *
      (Math.min(flourCup, sugarSpoons, cocoaSpoons)) / INGREDIENT_TABLE.SINGLE_COOKIE;
    const currentBoxes = Math.floor(result / INGREDIENT_TABLE.COOKIES_PER_BOX);
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