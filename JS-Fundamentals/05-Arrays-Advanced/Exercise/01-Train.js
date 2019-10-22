function train(array) {
    let wagons = array
        .shift()
        .split(' ')
        .map(Number);
    let maxPassengers = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let [action, number] = array[i].split(' ')
        number = Number(number);
        if (action === 'Add') {
            addWagon(number);
        } else {
            action = Number(action);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + action <= maxPassengers) {
                    let passengersInWagon = wagons[j] + action;
                    wagons.splice(j, 1, passengersInWagon);
                    break;
                }
            }
        }
    }

    function addWagon(number) {
        wagons.push(number);
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0', '30', '10', '75'
]);