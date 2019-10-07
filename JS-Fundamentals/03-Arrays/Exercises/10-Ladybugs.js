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
        let newIndex = 0;
        if (direction === 'left') {
            newIndex = currentIndex - flyLength;
            if (newIndex < 0) {
                ladybugArray[currentIndex] = 0;
            } else if (ladybugArray[newIndex] === 1) {
                checkIfOccupied(direction, flyLength, currentIndex, newIndex);
                if (newIndex < 0) {
                    ladybugArray[currentIndex] = 0;
                } else {
                    ladybugArray[newIndex] = 1;
                    ladybugArray[currentIndex] = 0;
                }
            }
        } else if (direction === 'right') {
            newIndex = currentIndex + flyLength;
            if (newIndex > arrayLength - 1) {
                ladybugArray[currentIndex] = 0;
            } else if (ladybugArray[newIndex] === 1) {
                checkIfOccupied(direction, flyLength, currentIndex, newIndex);
                if (newIndex > arrayLength - 1) {
                    ladybugArray[currentIndex] = 0;
                } else {
                    ladybugArray[newIndex] = 1;
                    ladybugArray[currentIndex] = 0;
                }
            }
        }
    }

    function checkIfOccupied(direction, flyLength, currentIndex, newIndex) {
        let ladybugCanFly = true;
        let fliesAway = false;
        if (direction === 'left') {
            if (ladybugArray[newIndex] === 1) {
                newIndex--;
                ladybugCanFly = false;
            } else {
                ladybugCanFly = true;
            }
            if (newIndex < 0) {
                fliesAway = true;
            }
        } else if (direction === 'right') {
            if (ladybugArray[newIndex] === 1) {
                newIndex++;
                ladybugCanFly = false;
            } else {
                ladybugCanFly = true;
            }
            if (newIndex > arrayLength - 1) {
                fliesAway = true;
            }
        }
        if (!ladybugCanFly && !fliesAway) {
            checkIfOccupied(direction, flyLength, currentIndex, newIndex);
        }
    }
}
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);