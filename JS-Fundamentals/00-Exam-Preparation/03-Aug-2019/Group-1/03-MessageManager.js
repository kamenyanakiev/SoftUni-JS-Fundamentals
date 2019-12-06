function messageManager(array) {
    const maxMessages = Number(array.shift());
    let data = {};
    for (const element of array) {
        let cmd = element.split('=');
        switch (cmd[0]) {
            case 'Add':
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        sent: Number(cmd[2]),
                        received: Number(cmd[3])
                    };
                }
                break;

            case 'Message':
                if (data[cmd[1]] && data[cmd[2]]) {
                    data[cmd[1]].sent++;
                    data[cmd[2]].received++;
                    if (data[cmd[1]].sent + data[cmd[1]].received === maxMessages) {
                        delete data[cmd[1]];
                        console.log(`${cmd[1]} reached the capacity!`);
                    }
                    if (data[cmd[2]].sent + data[cmd[2]].received === maxMessages) {
                        delete data[cmd[2]];
                        console.log(`${cmd[2]} reached the capacity!`);
                    }
                }
                break;

            case 'Empty':
                if (cmd[1] === 'All') {
                    data = {};
                } else if (data[cmd[1]]) {
                    delete data[cmd[1]];
                }
                break;

            default:
                break;
        }
        if (cmd[0] === 'Statistics') {
            break;
        }
    }
    let dataArray = Object.entries(data);
    let comperator = (a, b) => 
    b[1].received - a[1].received || a[0].localeCompare(b[0]);
    let sorted = dataArray.sort(comperator);
    console.log(`Users count: ${dataArray.length}`);
    sorted.forEach(element => {
        console.log(`${element[0]} - ${element[1].sent + element[1].received}`);
    });
}

messageManager([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]);