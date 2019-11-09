function piccolo(array) {
    let cars = [];
    array.forEach(element => {
        let [action, plate] = element.split(', ');
        if (action === 'IN' && !cars.includes(plate)) {
            cars.push(plate);
        } else if (action === 'OUT' && cars.includes(plate)) {
            let index = cars.indexOf(plate);
            cars.splice(index, 1);
        }
    });

    if (cars.length > 0) {
        console.log(cars.sort((a, b) => a.localeCompare(b)).join('\n'))
    } else {
        console.log('Parking Lot is Empty');
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