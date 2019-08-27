function neighborhoods(array) {
  let neighborhoodMap = new Map();
  let neighborhoods = array.shift().split(", ");
  for (const neighborhood of neighborhoods) {
    neighborhoodMap.set(neighborhood, []);
  }
  array.forEach(element => {
    let [neighborhood, person] = element.split(" - ");
    if (neighborhoods.includes(neighborhood)) {
      neighborhoodMap.get(neighborhood).push(person);
    }
  });
  let sortedNeighborhood = [...neighborhoodMap].sort(
    (a, b) => b[1].length - a[1].length
  );
  for (let [key, value] of sortedNeighborhood) {
    console.log(`${key}: ${value.length}`);
    if (value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        console.log(`--${value[i]}`);
      }
    }
  }
}
neighborhoods([
  "Abbey Street, Herald Street, Bright Mews",

  "Bright Mews - Garry",

  "Bright Mews - Andrea",

  "Invalid Street - Tommy",

  "Abbey Street - Billy"
]);
