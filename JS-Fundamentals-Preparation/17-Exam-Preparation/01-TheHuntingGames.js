function theHuntingGames(array) {
  const days = Number(array.shift());
  const players = Number(array.shift());
  let totalEnergy = Number(array.shift());
  const waterPerPlayer = Number(array.shift());
  const foodPerPlayer =  Number(array.shift());
  let water = waterPerPlayer * days * players;
  let food = foodPerPlayer * days * players;
  let enoughEnergy = true;
  let consumedEnergy = array.map(Number);
  for (let i = 1; i <= days; i++) {
    const neededEnergy = consumedEnergy.shift(); 
    totalEnergy -= neededEnergy;
    if (totalEnergy <= 0){ 
      enoughEnergy = false;
      break;
    }
      if (i % 2 === 0) {
        water *= 0.7;
        totalEnergy *= 1.05;
      }
      if (i % 3 === 0) {
        food -= (food / players);
        totalEnergy *= 1.1;
    }
  }
  if (enoughEnergy) {
    console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`);
  } else {
    console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
  }
}
theHuntingGames(['10', '7', '5035.5', '11.3', '7.2', '942.3', '500.57', '520.68', '540.87', '505.99', '630.3', '784.20', '321.21', '456.8', '330']);