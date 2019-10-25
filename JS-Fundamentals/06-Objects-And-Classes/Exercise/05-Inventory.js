function inventory(array) {
	let heroes = [];
	class Hero {
		constructor(name, level, items) {
			this.name = name;
			this.level = Number(level);
			this.items = items;
		}
	}
	array.forEach(element => {
		let [heroName, level, items] = element.split(' / ');
		items = items.split(', ');
		items.sort((a, b) => a.localeCompare(b));
		heroes.push(new Hero(heroName, Number(level), items));
	});
	heroes.sort((a, b) => a.level - b.level)
	for (const hero of heroes) {
		console.log(`Hero: ${hero.name}`);
		console.log(`level => ${hero.level}`);
		console.log(`items => ${hero.items.join(', ')}`);
	}
}
inventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);