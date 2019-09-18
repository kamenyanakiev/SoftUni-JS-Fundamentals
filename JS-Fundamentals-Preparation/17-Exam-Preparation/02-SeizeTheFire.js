function seizeTheFire(array) {
  const field = array[0];
  let currentWater = Number(array[1]);
  let fireCells = field.split('#');
  let totalFire = 0;
  let effort = 0;
  let cells = [];
  for (let i = 0; i < fireCells.length; i++) {
    let [typeOfFire, valueOfFire] = fireCells[i].split(' = ');
    valueOfFire = Number(valueOfFire);
    if (typeOfFire === 'High' && valueOfFire >= 81 && valueOfFire <= 125 && currentWater >= valueOfFire) {
      stopFire(valueOfFire);
    } else if (typeOfFire === 'Medium' && valueOfFire >= 51 && valueOfFire <= 80 && currentWater >= valueOfFire) {
      stopFire(valueOfFire);
    } else if (typeOfFire === 'Low' && valueOfFire >= 1 && valueOfFire <= 50 && currentWater >= valueOfFire) {
      stopFire(valueOfFire);
    }
  }
  console.log('Cells:');
  cells.forEach(element => {
    console.log(` - ${element}`);
  });
  console.log(`Effort: ${effort.toFixed(2)}`);
  console.log(`Total Fire: ${totalFire}`);

  function stopFire(valueOfFire) {
    currentWater -= valueOfFire;
    cells.push(valueOfFire);
    effort += (valueOfFire * 0.25);
    totalFire += valueOfFire;
  }
}
seizeTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);