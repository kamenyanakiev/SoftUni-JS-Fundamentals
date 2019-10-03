function santasGifts(array) {
  const COMMANDS = {
    FORWARD: 'Forward',
    BACK: 'Back',
    GIFT: 'Gift',
    SWAP: 'Swap'
  }
  const numberOfCommands = Number(array.shift());
  let housesArray = array.shift().split(' ');
  let currentPosition = 0;

  for (let i = 0; i < numberOfCommands; i++) {
    let [command, ...params] = array.shift().split(' ');
    switch (command) {
      case COMMANDS.FORWARD:
        forward(Number(params[0]));
        break;
      case COMMANDS.BACK:
        back(Number(params[0]));
        break;
      case COMMANDS.GIFT:
        gift(Number(params[0]), params[1]);
        break;
      case COMMANDS.SWAP:
        swap(params[0], params[1]);
        break;
      default:
        break;
    }
  }
  console.log(`Position: ${currentPosition}`);
  console.log(housesArray.join(', '));

  function forward(numberOfSteps) {
    if (currentPosition + numberOfSteps <= housesArray.length - 1) {
      currentPosition += numberOfSteps;
      housesArray.splice(currentPosition, 1);
    }
  }

  function back(numberOfSteps) {
    if (currentPosition - numberOfSteps >= 0) {
      currentPosition -= numberOfSteps;
      housesArray.splice(currentPosition, 1);
    }
  }

  function gift(newHouseIndex, newHouseNumber) {
    if (newHouseIndex >= 0 && newHouseIndex <= housesArray.length) {
      housesArray.splice(newHouseIndex, 0, newHouseNumber);
      currentPosition = newHouseIndex;
    }
  }

  function swap(firstHouse, secondHouse) {
    if (housesArray.includes(firstHouse) && housesArray.includes(secondHouse)) {
      let indexOfFirst = housesArray.indexOf(firstHouse);
      let indexOfSecond = housesArray.indexOf(secondHouse);
      [housesArray[indexOfFirst], housesArray[indexOfSecond]] = [housesArray[indexOfSecond], housesArray[indexOfFirst]];
    }
  }

}
santasGifts(['5',
  '255 500 54 78 98 24 30 47 69 58',
  'Forward 1',
  'Swap 54 47',
  'Gift 1 20',
  'Back 1',
  'Forward 3'
]);