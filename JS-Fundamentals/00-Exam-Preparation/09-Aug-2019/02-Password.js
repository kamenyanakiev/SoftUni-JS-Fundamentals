function password(array) {
    array.shift();
    array.forEach(element => {
        const regex = /(?<start>.+)>(?<numbers>\d{3})\|(?<lowerLetters>[a-z]{3})\|(?<upperLetters>[A-Z]{3})\|(?<otherSymbols>[^<>]{3})<(\k<start>)/g;
        const match = regex.exec(element);
        if (match) {
            const {numbers, lowerLetters, upperLetters, otherSymbols} = match.groups;
            const encryptedPassword = `${numbers}${lowerLetters}${upperLetters}${otherSymbols}`;
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log('Try another password!');
        }
    });
}

password([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
]);