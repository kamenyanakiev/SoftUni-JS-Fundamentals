function treasureHunt(array) {
    let treasureChest = array.shift().split('|');
    array.forEach(element => {
        let [action, ...actionDetails] = element.split(' ');
        if (action === 'Loot') {
            lootTreasure(actionDetails);
        } else if (action === 'Drop') {
            dropTreasure(Number(actionDetails[0]));
        } else if (action === 'Steal') {
            stealTreasure(Number(actionDetails[0]));
        } else if (action === 'Yohoho!') {
            let length = 0;
            let count = 0;
            if (treasureChest.length === 0) {
                console.log('Failed treasure hunt.');
            } else {
            treasureChest.forEach(element => {
                length += element.length;
                count++;
            });
            console.log(`Average treasure gain: ${(length / count).toFixed(2)} pirate credits.`);
            }
        }
    });
    
    function lootTreasure(items) {
        for (let i = 0; i < items.length; i++) {
            if (!treasureChest.includes(items[i])) {
                treasureChest.unshift(items[i]);
            }
        }
    }

    function dropTreasure(index) {
        if (treasureChest[index]) {
            let item = treasureChest[index];
            treasureChest.splice(index, 1);
            treasureChest.push(item);
        }
    }

    function stealTreasure(count) {
        let stolenItems = [];
        for (let i = 0; i < count; i++) {
            if (treasureChest[0]) {
                stolenItems.unshift(treasureChest.pop());  
            }
        }
        console.log(stolenItems.join(', '));
    }
}

treasureHunt(['Gold|Silver|Bronze|Medallion|Cup', 'Loot Wood Gold Coins', 'Loot Silver Pistol', 'Drop 3', 'Steal 3', 'Yohoho!']);