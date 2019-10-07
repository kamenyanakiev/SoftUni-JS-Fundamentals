function ladybugs(array) {
    let ladybugArray = [];
    const arrayLength = Number(array.shift());
    let initalLadybugs = array.shift().split(' ');
    for (let i = 0; i < arrayLength; i++) {
        if (i === Number(initalLadybugs[0])) {
            ladybugArray.push(1);
            initalLadybugs.shift();
        } else {
            ladybugArray.push(0);
        }
    }
    array.forEach(element => {
        const [currentIndex, direction, flyLength] = element.split(' ');
        if (ladybugArray[Number(currentIndex)] === 1) {
            moveLadybug(Number(currentIndex), direction, Number(flyLength));
        }
    });

    console.log(ladybugArray.join(' '));

    function moveLadybug(currentIndex, direction, flyLength) {
        let ladybugCanFly = true;
        if (direction === 'left') {
            if (currentIndex - flyLength < 0) {
                ladybugArray[currentIndex] = 0;
            } else if (ladybugArray[currentIndex - flyLength] === 1) {
                checkIfOccupied(direction, flyLength, currentIndex);
            }
        } else if (direction === 'right') {
            if (currentIndex + flyLength > arrayLength - 1) {
                ladybugArray[currentIndex] = 0;
            } else if (ladybugArray[currentIndex + flyLength] === 1) {
                checkIfOccupied(direction, flyLength, currentIndex);
            }
        }
    }
    function checkIfOccupied(direction, flyLength, currentIndex) {
        if (direction === 'left') {
            if (currentIndex - flyLength < 0) {
                ladybugArray[currentIndex] = 0;
            } else if (ladybugArray[currentIndex - flyLength] === 1) {
                flyLength++;
                ladybugCanFly = false;
            } else {
                ladybugCanFly = true;
            }
        } else if (direction === 'right') {
            if (flyLength + currentIndex > arrayLength - 1) {
                ladybugArray[currentIndex] = 0;
            } else if (ladybugArray[currentIndex + flyLength] === 1) {
                flyLength++;
                ladybugCanFly = false;
            } else {
                ladybugCanFly = true;
            }
        }
        if (!ladybugCanFly && ladybugArray[currentIndex] === 1) {
            checkIfOccupied(direction, flyLength, currentIndex);
        } else if (ladybugCanFly && ladybugArray[currentIndex] === 1) {
            if (direction === 'left') {
                ladybugArray[currentIndex - flyLength] = 1;
                ladybugArray[currentIndex] = 0;
            } else if (direction === 'right') {
                ladybugArray[currentIndex + flyLength] = 1;
                ladybugArray[currentIndex] = 0;
            }
        }
    }
}
ladybugs([ 5, '3', '3 left 2', '1 left -2']);