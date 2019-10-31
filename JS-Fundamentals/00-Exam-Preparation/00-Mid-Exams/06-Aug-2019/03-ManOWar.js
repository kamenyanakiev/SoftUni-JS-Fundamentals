function manOWar(array) {
    let pirateShipSections = array.shift().split('>');
    let warshipSections = array.shift().split('>');
    const sectionMaxHealth = Number(array.shift());
    let staleMateChecker = true;
    for (let i = 0; i < array.length; i++) {
        let [action, ...actionSpecifics] = array[i].split(' ');
        if (action === 'Fire') {
            shipFire(Number(actionSpecifics[0]), Number(actionSpecifics[1]));
        } else if (action === 'Defend') {
            shipDefend(Number(actionSpecifics[0]), Number(actionSpecifics[1]), Number(actionSpecifics[2]))
        } else if (action === 'Repair') {
            shipRepair(Number(actionSpecifics[0]), Number(actionSpecifics[1]))
        } else if (action === 'Status') {
            shipStatus()
        } else if (action === 'Retire') {
            break;
        }
        if (!staleMateChecker) {
            break;
        }
    }
        if (staleMateChecker) {
            let pirateShipSum = 0;
            let warshipSum = 0;
            pirateShipSections.forEach(element => {
                pirateShipSum += Number(element);
            });
            warshipSections.forEach(element => {
                warshipSum += Number(element);
            });
            console.log(`Pirate ship status: ${pirateShipSum}`);
            console.log(`Warship status: ${warshipSum}`);
        }

    function shipFire(index, damage) {
        if (warshipSections[index]) {
            let newDamage = Number(warshipSections[index]) - damage;
            warshipSections.splice(index, 1, newDamage)
            if (newDamage <= 0) {
                console.log('You won! The enemy ship has sunken.');
                staleMateChecker = false;
            }
        }
    }

    function shipDefend(startIndex, endIndex, damage) {
        if (pirateShipSections[startIndex] && pirateShipSections[endIndex]) {
            for (let i = startIndex; i <= endIndex; i++) {
                let newDamage = Number(pirateShipSections[i]) - damage; 
                pirateShipSections.splice(i, 1, newDamage);
                if (newDamage <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    staleMateChecker = false;
                    break;
                }
            }
        }
    }

    function shipRepair(index, health) {
        if (pirateShipSections[index]) {
            let newHealth = 0; 
            if (Number(pirateShipSections[index]) + health >= sectionMaxHealth ) {
                newHealth = sectionMaxHealth;
            } else {
                newHealth = Number(pirateShipSections[index]) + health;
            }
            pirateShipSections.splice(index, 1, newHealth);
        }
    }

    function shipStatus() {
        let needRepair = 0;
        for (let i = 0; i < pirateShipSections.length; i++) {
            let currentSection = Number(pirateShipSections[i]);
            if (currentSection < (sectionMaxHealth * 0.20)) {
                needRepair++;
            }
        }
        console.log(`${needRepair} sections need repair.`);
    }
    
}   

manOWar(['12>13>11>20>66', '12>22>33>44>55>32>18', '70', 'Fire 2 11', 'Fire 8 100', 'Defend 3 6 11', 'Defend 0 3 5', 'Repair 1 33', 'Status', 'Retire']);