function froggySquad(array) {
    let frogs = array.shift().split(' ');

    array.forEach(element => {
        let [command, ...commandSpecifics] = element.split(' ');  
        if (command === 'Join') {
            frogJoin(commandSpecifics[0]);
        } else if (command === 'Jump') {
            frogJump(commandSpecifics[0], Number(commandSpecifics[1]));
        } else if (command === 'Dive') {
            frogDive(Number(commandSpecifics[0]));
        } else if (command === 'First') {
            printFirstFrogs(Number(commandSpecifics[0]));
        } else if (command === 'Last') {
            printLastFrogs(Number(commandSpecifics[0]))
        }
        if (command === 'Print') {
            if (commandSpecifics[0] === 'Normal') {
                console.log(`Frogs: ${frogs.join(' ')}`);
            } else if (commandSpecifics[0] === 'Reversed') {
                let result = frogs.reverse();
                console.log(`Frogs: ${result.join(' ')}`);
            }
        }
    });

    function frogJoin(frog) {
        frogs.push(frog);
    }

    function frogJump(name, index) {
        if (frogs[index]) {
            frogs.splice(index, 0, name);
        }
    }

    function frogDive(index) {
        if (frogs[index]) {
            frogs.splice(index, 1);
        }
    }

    function printFirstFrogs(count) {
        let result = [];
        for (let i = 0; i < count; i++) {
            if (frogs[i]) {
                result.push(frogs[i]);
            }
        }
        console.log(result.join(' '));
    }
    function printLastFrogs(count) {
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
}

froggySquad([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ])