function concert(array) {
  let bands = {};
  const printMembers = array.pop();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'start of concert') {
      break;
    }
    const [action, band, otherParams] = array[i].split('; ');
    if (action === 'Play') {
      const playTime = Number(otherParams);
      addSongTime(band, playTime);
    } else if (action === 'Add') {
      const members = otherParams.split(', ');
      addMembers(band, members);
    }
  }
  console.table(bands)

  function addMembers(band, members) {
    if (bands.hasOwnProperty(band)) {
      let currentMembers = bands[band][members];
      let newMembers = new Set(currentMembers, members);
      bands[band] = newMembers;
    } else {
      bands[band] = members;
    }
    
  }

  function addSongTime(band, songTime) {
    if (bands.hasOwnProperty(band)) {

    } else {
      bands.band.playTime = songTime;
    }
  }
}
  concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
  ]);