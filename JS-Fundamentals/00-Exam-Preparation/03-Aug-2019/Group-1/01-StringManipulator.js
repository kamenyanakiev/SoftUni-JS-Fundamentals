function stringManipulator(array) {
    let string = array.shift();
    array.forEach(element => {
        let [action, ...actionDetails] = element.split(' ');
        if (action === 'Translate') {
            translateString(actionDetails[0], actionDetails[1]);
        } else if (action === 'Includes') {
            includesString(actionDetails[0]);
        } else if (action === 'Start') {
            startString(actionDetails[0]);
        } else if (action === 'Lowercase') {
            lowercaseString();
        } else if (action === 'FindIndex') {
            findIndexString(actionDetails[0]);
        } else if (action === 'Remove') {
            removeString(Number(actionDetails[0]), Number(actionDetails[1]));
        }
    });

    function translateString(char, replacement) {
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

    function startString(checker) {
        if (string.startsWith(checker)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function lowercaseString() {
        string = string.toLowerCase();
        console.log(string);
    }

    function findIndexString(char) {
        console.log(string.lastIndexOf(char));
    }

    function removeString(index, count) {
        let toBeReplaced = string.split('');
        toBeReplaced.splice(index, count);
        string = toBeReplaced.join('');
        console.log(string);
    }
}
stringManipulator([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
  ]);