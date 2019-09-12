function songEncription(array) {
  const artistNameChecker = /(^[A-Z][a-z ']+)(?=[:])/; // Checks for valid artist names
  const songNameChecker = /(?<=[:])([A-Z ]+)/; // Checks for valid song names
  for (let i = 0; array[i] !== 'end'; i++) {
    const string = array[i];
    const nameCheck = artistNameChecker.test(string);
    const songCheck = songNameChecker.test(string);
    if (nameCheck && songCheck) {
      encriptSong(string);
    } else {
      console.log('Invalid input!');
    }
  }

  function encriptSong(string) {
    let [artistName, songName] = string.split(':');
    const encriptor = Number(artistName.length);
    let encriptedString = '';
    for (let j = 0; j < artistName.length; j++) {
      let encriptedLetter = artistName[j].charCodeAt();

      if (artistName[j] === ' ') {
        encriptedString += ' ';
      } else if (artistName[j] === `'`) {
        encriptedString += `'`;
      } else {
        if (j === 0 && encriptedLetter + encriptor > 90) {
          let currentEncriptor = encriptedLetter + encriptor;
          currentEncriptor -= 90;
          encriptedString += `${String.fromCharCode(64 + currentEncriptor)}`;
        } else if (j > 0 && encriptedLetter + encriptor > 122) {
          let currentEncriptor = encriptedLetter + encriptor;
          currentEncriptor -= 122;
          encriptedString += `${String.fromCharCode(96 + currentEncriptor)}`;
        } else {
          encriptedString += `${String.fromCharCode(encriptedLetter + encriptor)}`;
        }
      }

    }
    encriptedString += '@';
    for (let k = 0; k < songName.length; k++) {
      let encriptedLetter = songName[k].charCodeAt();
      if (songName[k] === ' ') {
        encriptedString += ' ';
      } else if (songName[k] === `'`) {
        encriptedString += `'`;
      } else {
        if (encriptedLetter + encriptor > 90) {
          let currentEncriptor = encriptedLetter + encriptor;
          currentEncriptor -= 90;
          encriptedString += `${String.fromCharCode(64 + currentEncriptor)}`;
        } else {
          encriptedString += `${String.fromCharCode(encriptedLetter + encriptor)}`;
        }
      }
    }
    console.log(`Successful encryption: ${encriptedString}`);
  }
}
songEncription([
  'Adele:ONE AND ONLY',
  'Eminem:VENOM',
  'Linkin park:NUMB',
  'Drake:NONSTOP',
  'Adele:HELLO',
  'end'
]);