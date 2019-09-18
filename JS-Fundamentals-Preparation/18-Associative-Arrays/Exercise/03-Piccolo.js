function piccolo(array) {
  let cars = [];
  array.forEach(element => {
    let [action, plate] = element.split(', ');
    if (action === 'IN') {
      cars.push(plate);
    } else if(action === 'OUT'){
      let index = cars.indexOf(plate);
      cars.splice(index, 1);
    }
  });
  if (cars.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    let sortedCars = cars.sort(sortCars);
    console.log(sortedCars.join('\n'));
  }

  function sortCars(firstCar, secondCar) {
    let firstNumber = Number(firstCar.substring(2, firstCar.length - 2));
    let secondNumber = Number(secondCar.substring(2, secondCar.length - 2));
    return  firstNumber - secondNumber;
  }
}
piccolo(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU'
]);