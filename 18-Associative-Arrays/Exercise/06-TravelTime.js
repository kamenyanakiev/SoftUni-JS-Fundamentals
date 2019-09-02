function travelTime(array) {
  let countries = {};
  array.forEach(line => {
    let [country, city, currentPrice] = line.split(' > ');
    currentPrice = Number(currentPrice);
    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
      countries[country][city] = currentPrice;
    } else {
      let countryObj = countries[country];
      if (!countryObj.hasOwnProperty(city)) {
        countryObj[city] = currentPrice;
      } else {
        let oldPrice = countryObj[city];
        if (oldPrice > currentPrice) {
          countryObj[city] = currentPrice
        }
      }
    }
  });
  let sortedCountries = Object.entries(countries).sort(sortCountries);
 for (let [name, cities] of sortedCountries) {
   let sortedCities = Object.entries(cities).sort(sortCities);
   let output = `${name} -> `;
   for (let [cityName, cityPrice] of sortedCities) {
     output += `${cityName} -> ${cityPrice} `
   }
   console.log(output);
  }

  function sortCountries(firstCountry, secondCountry) {
    let firstName = firstCountry[0];
    let secondName = secondCountry[0];
    return firstName.localeCompare(secondName);
  }

  function sortCities(firstCity, secondCity) {
    let firstPrice = firstCity[1];
    let secondPrice = secondCity[1];
    return firstPrice - secondPrice;
  }

}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"
  ]);