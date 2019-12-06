function messageManager(array) {
    let data = {};
    for (const element of array) {
        let [command, ...commandDetails] = element.split(':');
        switch (command) {
            case 'Add':
                if (!data.hasOwnProperty(commandDetails[0])) {
                    addPerson(commandDetails[0], Number(commandDetails[1]), Number(commandDetails[2]));
                } else {
                    addPersonHealth(commandDetails[0], Number(commandDetails[1]))
                }
                break;

            case 'Attack':
                if (data[commandDetails[0]] && data[commandDetails[1]]) {
                    attackPerson(commandDetails[0], commandDetails[1], Number(commandDetails[2]));
                }
                break;

            case 'Delete':
                if (commandDetails[0] === 'All') {
                    data = {};
                } else if (data[commandDetails[0]]) {
                    delete data[commandDetails[0]];
                }
                break;

            default:
                break;
        }
        if (command === 'Results') {
            break;
        }
    }
    
    let dataArray = Object.entries(data);
    let comperator = (a, b) =>
        b[1].health - a[1].health || a[0].localeCompare(b[0]);
    let sorted = dataArray.sort(comperator);
    console.log(`People count: ${dataArray.length}`);
    sorted.forEach(element => {
        console.log(`${element[0]} - ${element[1].health} - ${element[1].energy}`);
    });

    function addPerson(name, personHealth, personEnergy) {
        data[name] = {
            health: personHealth,
            energy: personEnergy
        };
    }

    function addPersonHealth(name, bonusHealth) {
        data[name].health += bonusHealth;
    }

    function attackPerson(attackerName, defenderName, damage) {
        data[defenderName].health -= damage;
        if (data[defenderName].health <= 0) {
            delete data[defenderName];
            console.log(`${defenderName} was disqualified!`);
        }
        data[attackerName].energy -= 1;
        if (data[attackerName].energy === 0) {
            delete data[attackerName];
            console.log(`${attackerName} was disqualified!`);
        }
    }
}

messageManager([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);