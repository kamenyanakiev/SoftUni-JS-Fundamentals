function city(name, area, population, country, postCode) {
  let city = {
    name: name,
    area: Number(area),
    population: Number(population),
    country: country,
    postCode: Number(postCode)
  }
  for (const key in city) {
    console.log(`${key} -> ${city[key]}`);
  }
}
city('Sofia', '492', '1238438', 'Bulgaria', '1000');