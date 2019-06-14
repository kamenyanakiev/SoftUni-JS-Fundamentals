function dungeonestDark(array) {
  let string = array.toString().split('|');
  let health = 100;
  let liveChecker = true;
  let coins = 0;
  for (let i = 0; i < string.length; i++) {
    let encounter = string[i].split(' ');
    let monster = encounter[0];
    let value = Number(encounter[1]);
    if (monster === 'potion') {
      if (health === 100) {
        console.log(`You healed for 0 hp.`);
      } else if (health + value > 100) {
        value = 100 - health;
        console.log(`You healed for ${value} hp.`);
        health = 100;
      } else {
        health += value;
        console.log(`You healed for ${value} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (monster === 'chest') {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      health -= value;
      if (health <= 0) {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        liveChecker = false;
        break;
      } else {
        console.log(`You slayed ${monster}.`);
      }
    }
  }
  if (liveChecker) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);