function houseParty(array) {
  let list = [];
  for (let line of array) {
    let lineActions = line.split(' ');
    let name = lineActions[0];
    let nameIsIncluded = list.includes(name);
    if (lineActions.length === 3) {
      if (nameIsIncluded) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else if (lineActions.length > 3) {
      if (nameIsIncluded) {
        let indexOfName = list.indexOf(name);
        list.splice(indexOfName, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(list.join('\n'));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);