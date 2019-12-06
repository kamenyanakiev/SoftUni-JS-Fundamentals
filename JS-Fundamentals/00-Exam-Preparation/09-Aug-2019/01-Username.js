function username(array) {
    let user = array.shift();
    array.forEach(element => {
        let [command, ...commandDetails] = element.split(' ');
        switch (command) {
            case 'Case':
                switchCapitalization(commandDetails[0]);
                break;
            case 'Reverse':
                reverseString(Number(commandDetails[0]), Number(commandDetails[1]));
                break;
            case 'Cut':
                cutString(commandDetails[0]);
                break;
            case 'Replace':
                replaceString(commandDetails[0]);
                break;
            case 'Check':
                checkString(commandDetails[0]);
                break;
            case 'Sign up':
                break;
            default:
                break;
        }
    });

    function switchCapitalization(capitalization) {
        user = capitalization === 'upper' ? user.toUpperCase() : user.toLowerCase();
        console.log(user);
    }

    function reverseString(startIndex, endIndex) {
        let toBeReversed = user.split('');
        if (toBeReversed[startIndex] && toBeReversed[endIndex]) {
            let reversed = toBeReversed.splice(startIndex, endIndex);
            reversed = reversed.reverse().join('');
            console.log(reversed);
        }
    }

    function cutString(substring) {
        if (user.includes(substring)) {
            let regex = new RegExp(substring, 'g');
            user = user.replace(regex, '')
            console.log(user);
        } else {
            console.log(`The word ${user} doesn't contain ${substring}.`);
        }
    }

    function replaceString(char) {
        if (user.includes(char)) {
            let regex = new RegExp(char, 'g');
            user = user.replace(regex, '*');
            console.log(user);
        }
    }

    function checkString(char) {
        if (user.includes(char)) {
            console.log('Valid');
        } else {
            console.log(`Your username must contain ${char}.`);
        }
    }
}

username(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up']);