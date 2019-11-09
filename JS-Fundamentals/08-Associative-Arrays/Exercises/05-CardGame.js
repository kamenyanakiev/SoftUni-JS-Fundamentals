function cardGame(array) {
    let cardPowers = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let cardTypes = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };
    let players = {};
    array.forEach(line => {
        let [name, cards] = line.split(': ');
        let uniqueCards = new Set(cards.split(', '));
        uniqueCards = [...uniqueCards];
        if (!players.hasOwnProperty(name)) {
            players[name] = uniqueCards;
        } else {
            for (const card of uniqueCards) {
                if (!players[name].includes(card)) {
                    players[name].push(card);
                }
            }
        }
    });
    for (let name in players) {
        const deck = players[name];
        let sum = 0;
        for (const card of deck) {
            const tokens = card.split('');
            if (tokens.length === 2) {
                sum += calculateSum(tokens[0], tokens[1]);
            } else if (tokens.length === 3) {
                sum += calculateSum(tokens[0] + tokens[1], tokens[2]);
            }
        }
        console.log(`${name}: ${sum}`);
    }

    function calculateSum(power, type) {
        const cardPower = cardPowers[power];
        const cardType = cardTypes[type];
        return cardPower * cardType;
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);