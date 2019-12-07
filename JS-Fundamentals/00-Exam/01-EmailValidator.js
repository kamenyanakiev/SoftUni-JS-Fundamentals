function emailValidator(array) {
    let email = array.shift();
    array.forEach(element => {
        let [command, ...commandDetails] = element.split(' ');
        switch (command) {
            case 'Make':
                switchCapitalization(commandDetails[0]);
                break;
            case 'GetDomain':
                getDomain(Number(commandDetails[0]));
                break;
            case 'GetUsername':
                getUsername(email);
                break;
            case 'Replace':
                replaceString(commandDetails[0]);
                break;
            case 'Encrypt':
                encryptString(email);
                break;
            default:
                break;
        }
    });

    function switchCapitalization(capitalization) {
        email = capitalization === 'Upper' ? email.toUpperCase() : email.toLowerCase();
        console.log(email);
    }

    function getDomain(index) {
        let domain = email.split('');
        if (domain[index]){
            domain = domain.splice(domain.length - index, domain.length)
            console.log(domain.join(''));
        }
    }

    function getUsername(email) {
        const regex = /^(?<name>[\w]+)\@/;
        let match = regex.exec(email);
        if (match) {
            const {name} = match.groups;
            console.log(name);
        } else {
            console.log(`The email ${email} doesn't contain the @ symbol.`);
        }
    }

    function replaceString(char) {
        if (email.includes(char)) {
            let regex = new RegExp(char, 'g');
            email = email.replace(regex, '-');
            console.log(email);
        }
    }

    function encryptString(email) {
        let emailArray = email.split('');
        let result = [];
        emailArray.forEach(element => {
            result.push(element.charCodeAt(0));
        });
        console.log(result.join(' '));
    }
}

emailValidator([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
  ]);