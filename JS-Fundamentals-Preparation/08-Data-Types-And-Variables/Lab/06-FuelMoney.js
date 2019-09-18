function fuelMoney(distance, passengers, pricePerLitre) {
  let neededFuel = ((distance / 100) * 7) + (passengers * 0.100);
  let neededMoney = pricePerLitre * neededFuel;
  console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
fuelMoney(260, 9, 2.49);