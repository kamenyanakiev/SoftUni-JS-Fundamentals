function concert(input) {
  const COMMANDS = {
    PLAY: 'Play',
    ADD: 'Add'
  };

  let bands = {};
  const bandToPrint = input.pop();
  input.pop(); //to remove start of concert
  mapData();

  function mapData() {
    input.forEach(item => {
      const [command, band, argument] = item.split('; ');
      if (command === COMMANDS.PLAY) {
        addTime(band, argument);
      } else if (command === COMMANDS.ADD) {
        addBand(band, argument);
      }
    });
  }

  printResult();

  function addBand(band, members) {
    if (bands.hasOwnProperty(band)) {
      members.split(', ').forEach(person => {
        bands[band].members.add(person);
      });
    } else {
      const membersSet = new Set();
      members.split(', ').forEach(person => {
        membersSet.add(person);
      });

      bands[band] = {
        name: band,
        members: membersSet,
        time: 0
      };
    }
  }

  function addTime(band, time) {
    if (bands.hasOwnProperty(band)) {
      // if the band is already added
      bands[band].time += Number(time);
    } else {
      bands[band] = {
        name: band,
        members: new Set(),
        time: Number(time)
      };
    }
  }

  function printResult() {
    const arrayOfbands = mapObjectToArray();
    arrayOfbands.sort(compare);
    let totalTime = 0;
    arrayOfbands.forEach(item => {
      totalTime += item.time;
    });

    console.log(`Total time: ${totalTime}`);

    arrayOfbands.forEach(item => {
      console.log(`${item.name} -> ${item.time}`);
    });

    console.log(bandToPrint);
    bands[bandToPrint].members.forEach(item => {
      console.log(`=> ${item}`);
    });
  }

  function compare(a, b) {
    if (a.time > b.time) {
      return -1;
    } else if (a.time < b.time) {
      return 1;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  }

  function mapObjectToArray() {
    let result = [];
    for (let [key, value] of Object.entries(bands)) {
      result.push(value);
    }
    return result;
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