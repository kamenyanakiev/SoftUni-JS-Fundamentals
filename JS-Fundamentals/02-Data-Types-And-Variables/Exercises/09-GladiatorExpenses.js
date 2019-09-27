function gladiatorExpenses(fights, helmetCost, swordCost, shieldCost, armorCost) {
	let broken = {
		helmets: 0,
		swords: 0,
		shields: 0,
		armors: 0
	}
	for (let i = 1; i <= fights; i++) {
		if (i % 2 === 0) {
			broken.helmets++;
		}
		if (i % 3 === 0) {
			broken.swords++;
		}
		if (i % 3 === 0 && i % 2 === 0) {
			broken.shields++;
			if (broken.shields % 2 === 0) {
				broken.armors++;
			}
		}
	}
	console.log(`Gladiator expenses: ${(broken.helmets * helmetCost + broken.shields * shieldCost + 
    broken.swords * swordCost + broken.armors * armorCost).toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);