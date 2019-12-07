function inboxManager(array) {
    let data = {};
    array.forEach(element => {
        const [command, ...commandDetails] = element.split('->');
        switch (command) {
            case 'Add':
                addEmail(commandDetails[0]);
                break;
            case 'Send':
                sendEmail(commandDetails[0], commandDetails[1]);
                break;
            case 'Delete':
                deleteEmail(commandDetails[0]);
                break;

            default:
                break;
        }
    });
    const followers = Object.keys(data);
    console.log(`Users count: ${followers.length}`);
    if (followers.length > 0) {
        followers.sort((followerOne, followerTwo) => data[followerTwo].length - data[followerOne].length || followerOne.localeCompare(followerTwo));
        for(let currentFollower of followers) {
            console.log(`${currentFollower}`);
            for (let i = 0; i < data[currentFollower].length; i++) {
                console.log(` - ${data[currentFollower][i]}`);
            }
        }
    }

    function addEmail(name) {
        if (!data.hasOwnProperty(name)) {
            data[name] = [];
        } else {
            console.log(`${name} is already registered`);
        }
    }

    function sendEmail(name, sentEmail) {
        if (data.hasOwnProperty(name)) {
            data[name].push(sentEmail);
        } else {
            data[name] = [sentEmail];
        }
    }

    function deleteEmail(name) {
        if (data.hasOwnProperty(name)) {
            delete data[name];
        } else {
            console.log(`${name} not found!`);
        }
    }
}

inboxManager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ]);