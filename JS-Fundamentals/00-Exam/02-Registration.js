function registration(array) {
    let toBeChecked = Number(array.shift());
    let successfullRegistrations = 0;
    for (let i = 0; i < toBeChecked; i++) {
        const email = array[i];
        const regex = /^(?<start>U\$)(?<username>[A-Z][a-z]{2,})(\k<start>)(?<end>P\@\$)(?<password>[A-z]{5,}\d+)(\k<end>)$/g;
        const match = regex.exec(email);
        if (match) {
            const {username, password} = match.groups;
            console.log('Registration was successful');
            console.log(`Username: ${username}, Password: ${password}`);
            successfullRegistrations++;
        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${successfullRegistrations}`);
}

registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ]);