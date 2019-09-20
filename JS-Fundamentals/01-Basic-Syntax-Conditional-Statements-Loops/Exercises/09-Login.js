function login(input) {
    let user = input[0];
    let password = user.split('').reverse().join('');
    for (let i = 1; i < input.length; i++) {
        if (input[i] !== password) {
            if (i === 4) {
                console.log(`User ${user} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        } else if (input[i] === password) {
            console.log(`User ${user} logged in.`);
            break;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])