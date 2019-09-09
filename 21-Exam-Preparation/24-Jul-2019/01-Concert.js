function concert(array) {
  let bands = new Map();
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

  function addMembers(band, members) {
    if (!bands.has(band)) {
      bands.set(band, {
        members: new Set(members)
      });
    } else {
      const currentMembers = [...bands.get(band).members];
      const newMembers = [...currentMembers, ...members];
      bands.set(band, {
        members: new Set(newMembers)
      });
    }
  }

  function addSongTime(band, songTime) {
 
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