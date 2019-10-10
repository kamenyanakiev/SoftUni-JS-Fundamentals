function numberArray(array) {
    let numbersArray = array
        .shift()
        .split(' ')
        .map(Number);
    array.forEach(element => {
        let [command, ...commandSpecifics] = element.split(' ');
        switch (command) {
            case 'Switch':
                switchNumber(Number(commandSpecifics[0]));
                break;
            case 'Change':
                changeNumber(Number(commandSpecifics[0]), Number(commandSpecifics[1]));
                break;
            case 'Sum':
                sumNumbers(commandSpecifics[0]);
                break;

            default:
                break;
        }
    });
    let finalPrint = numbersArray.filter(a => {
        return a >= 0
    });

    console.log(finalPrint.join(' '));

    function switchNumber(index) {
        if (numbersArray[index]) {
            numbersArray[index] *= -1;
        }
    }

    function changeNumber(index, value) {
        if (numbersArray[index]) {
            numbersArray.splice(index, 1, value);
        }
    }

    function sumNumbers(toBeSummed) {
        let summed = 0;
        if (toBeSummed === 'Positive') {
            numbersArray.forEach(element => {
                if (element >= 0) {
                    summed += element;
                }
            });
        } else if (toBeSummed === 'Negative') {
            numbersArray.forEach(element => {
                if (element < 0) {
                    summed += element;
                }
            });
        } else if (toBeSummed === 'All') {
            numbersArray.forEach(element => {
                summed += element;
            });
        }
        console.log(summed);
    }
}
numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);