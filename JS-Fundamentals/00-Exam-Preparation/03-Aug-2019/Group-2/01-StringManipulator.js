function stringManipulator(array) {
    let string = array.shift();
    array.forEach(element => {
        let [action, ...actionDetails] = element.split(' ');
        if (action === 'Change') {
            changeString(actionDetails[0], actionDetails[1]);
        } else if (action === 'Includes') {
            includesString(actionDetails[0]);
        } else if (action === 'End') {
            endString(actionDetails[0]);
        } else if (action === 'Uppercase') {
            upperCaseString();
        } else if (action === 'FindIndex') {
            findIndexString(actionDetails[0]);
        } else if (action === 'Cut') {
            cutString(Number(actionDetails[0]), Number(actionDetails[1]));
        }
    });

    function changeString(char, replacement) {
        let toBeReplaced = string.split('');
        while (toBeReplaced.includes(char)) {
            let index = toBeReplaced.indexOf(char);
            toBeReplaced[index] = replacement;
        }
        let replaced = toBeReplaced.join('');
        string = replaced;
        console.log(string);
    }

    function includesString(checker) {
        if (string.includes(checker)) {
            console.log('True');
        } else {
            console.log('False');   
        }
    }

    function endString(checker) {
        if (string.endsWith(checker)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function upperCaseString() {
        string = string.toUpperCase();
        console.log(string);
    }

    function findIndexString(char) {
        console.log(string.indexOf(char));
    }

    function cutString(index, count) {
        let toBeReplaced = string.split('');
        toBeReplaced = toBeReplaced.splice(index, count);
        string = toBeReplaced.join('');
        console.log(string);
    }
}

stringManipulator([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
  ]);