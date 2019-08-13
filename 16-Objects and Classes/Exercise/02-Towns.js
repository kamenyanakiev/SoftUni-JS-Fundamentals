function towns(array) {
  class Town {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  let townArray = [];
  for (let i = 0; i < array.length; i++) {
    let [name, latitude, longitude] = array[i].split(' | ');
    let nextTown = new Town(name, latitude, longitude);
    townArray.push(nextTown);
  }
  townArray.forEach((i) => 
  console.log(`{ town: '${i.name}', latitude: '${Number(i.latitude).toFixed(2)}', longitude: '${Number(i.longitude).toFixed(2)}' }`));
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);