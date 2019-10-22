function arrayManipulations(array) {
  let initialArray = array
    .shift()
    .split(' ')
    .map(Number);
  for (let i = 0; i < array.length; i++) {
    let [command, firstNum, secondNum] = array[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
      case 'Add': add(firstNum);
        break;
      case 'Remove': remove(firstNum);
        break;
      case 'RemoveAt': removeAt(firstNum);
        break;
      case 'Insert': insert(firstNum, secondNum);
        break;
      default:
        break;
    }
  }
  function add(number){
    initialArray.push(number);
  }
  function remove(number) {
    initialArray = initialArray.filter(x => x !== number);
  }
  function removeAt(index) {
    initialArray.splice(index, 1);
  }
  function insert(number, index) {
    initialArray.splice(index, 0, number);
  }
  console.log(initialArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])