function spiceMustFlow(startingSpice) {
  let spice = Number(startingSpice);
  let daysCounter = 0;
  let totalSpice = 0;
  while (spice >= 100) {
    totalSpice += spice;
    spice -= 10;
    if (totalSpice > 26) {
      totalSpice -= 26;
    }
    daysCounter++;
  }
  if (totalSpice > 26) {
    totalSpice -= 26;
  }
  console.log(daysCounter);
  console.log(totalSpice);
}
spiceMustFlow(111);