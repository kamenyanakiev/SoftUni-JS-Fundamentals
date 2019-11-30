function froggySquad(array) {
    let frogs = array.shift().split(' ');

    array.forEach(element => {
        let [action, ...actionSpesifics] = element.split(' ');
        if (action === 'Join') {
            joinFrog(actionSpesifics[0]);
        } else if (action === 'Jump') {
            jumpFrog(actionSpesifics[0], Number(actionSpesifics[1]));
        } else if (action === 'Dive') {
            diveFrog(Number(actionSpesifics[0]))
        } else if (action === 'First') {
            countFirst(Number(actionSpesifics[0]));
        } else if (action === 'Last') {
            countLast(Number(actionSpesifics[0]));
        } else if (action === 'Print') {
            printFrogs(actionSpesifics[0]);
        }
    });

    function joinFrog(name) {
        frogs.push(name);
    }

    function jumpFrog(name, index) {
        if (frogs[index]) {
            frogs.splice(index, 0, name);
        }
    }

    function diveFrog(index) {
        if (frogs[index]) {
            frogs.splice(index, 1);
        }
    }

    function countFirst(count) {
        let counted = [];
        for (let i = 0; i < count; i++) {
            counted[i] = frogs[i];
        }
        console.log(counted.join(' '));
        
    }

    function countLast(count) {
        let result = [];
        let counter = 0;
        for (let i = frogs.length; counter <= count; i--) {
            if (frogs[i]) {
                result.unshift(frogs[i]);
            }
            counter++;
        }
        console.log(result.join(' '));
    }

    function printFrogs(printType) {
        if (printType === 'Normal') {
            console.log(`Frogs: ${frogs.join(' ')}`);
            
        } else if (printType === 'Reversed') {
            let reversed = frogs.reverse();
            console.log(`Frogs: ${reversed.join(' ')}`);
            
        }
    }
}

froggySquad([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ]);