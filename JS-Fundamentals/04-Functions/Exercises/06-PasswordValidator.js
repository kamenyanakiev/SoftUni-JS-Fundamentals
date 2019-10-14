function passwordValidator(password) {

    const lengthValidation = lengthValidator(password);

    const constainsValidation = constainsValidator(password);

    const digitContainsValidation = digitContainsValidator(password);

    if (lengthValidation === true && constainsValidation === true && digitContainsValidation === true) {
        console.log('Password is valid');
    } else {
        if (lengthValidation !== true) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (constainsValidation !== true) {
            console.log('Password must consist only of letters and digits');
        }
        if (digitContainsValidation !== true) {
            console.log('Password must have at least 2 digits');
        }
    }

    function lengthValidator(password) {
        if (password.length >= 6 && password.length <= 10) {
           return true; 
        } else {
            return 'Password must be between 6 and 10 characters';
        }
        
    }

    function constainsValidator(password) {
        let characters = password.split('');
        let isValid = true;

        for (let letter of characters) {
            let assciiValue = letter.charCodeAt(0);

            if(!isDigit(assciiValue) && !isCapitalCase(assciiValue) && !isLoweCase(assciiValue)){
                isValid = false;
                break;
            } 
        }
        if (isValid) {
            return true;
        } else {
            return 'Password must consist only of letters and digits';
        }

        function isDigit(char) {
            return char >= 48 && char <= 57;
        }

        function isCapitalCase(char) {
            return char >= 65 && char <= 90;
        }

        function isLoweCase(char) {
            return char >= 97 && char <= 152;
        }

    }

    function digitContainsValidator(password) {
        let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        let digitCounter = 0;

        password.split('').forEach((letter) => {
            let value = Number(letter)
            if(digits.includes(value)){
                digitCounter++;
            }
        });

        if (digitCounter >= 2) {
            return true
        } else {
            return 'Password must have at least 2 digits';
        }
    }
}
passwordValidator('s4ad45');