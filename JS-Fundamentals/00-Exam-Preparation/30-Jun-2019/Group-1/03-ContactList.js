function contactList(array) {
    let contactsArray = array.shift().split(' ');
    array.forEach(element => {
        let [command, ...commandSpecifics] = element.split(' ');
        switch (command) {
            case 'Add':
                addContact(commandSpecifics[0], Number(commandSpecifics[1]));
                break;
            case 'Remove':
                removeContact(Number(commandSpecifics[0]));

                break;
            case 'Export':
                exportContacts(Number(commandSpecifics[0]), Number(commandSpecifics[1]));
                break;
            case 'Print':
                printContacts(commandSpecifics[0]);
                break;
        
            default:
                break;
        }
    });

    function addContact(contact, index) {
        if (!contactsArray.includes(contact)) {
            contactsArray.push(contact);
        } else {
            if (contactsArray[index]) {
                contactsArray.splice(index, 0, contact);
            }
        }
    }
    
    function removeContact(index) {
        if (contactsArray[index]) {
            contactsArray.splice(index, 1);
        }
    }

    function exportContacts(startIndex, endCount) {
        let counter = 0;
        let result = [];
        for (let i = startIndex; counter < endCount; i++) {
            result.push(contactsArray[i]);
            counter++;
        }
        console.log(result.join(' '));
        
    }

    function printContacts(printType) {
        if (printType === 'Normal') {
            console.log(`Contacts: ${contactsArray.join(' ')}`);
        } else if (printType === 'Reversed') {
            let reversedArray = contactsArray;
            console.log(`Contacts: ${reversedArray.reverse().join(' ')}`);
        }
    }
}
contactList([
    'Alisson Bellamy Candace Tristan',
    'Remove 3',
    'Add Bellamy 2',
    'Print Normal'
  ]);