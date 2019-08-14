function makeADictionary(array) {
  let dictionary = {};
  let parsedArray = array.map(JSON.parse);
  parsedArray.forEach(element => {
    let nested = Object.entries(element);
    let term = nested[0][0];
    let desctiption = nested [0][1];
    dictionary[term] = desctiption;
  });
  let sortedDictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
  sortedDictionary.forEach(element => {
    console.log(`Term: ${element[0]} => Definition: ${element[1]}`);
  });
}
makeADictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);