function catalogue(array) {
	let products = {};
	array.forEach(element => {
		const [item, price] = element.split(' : ');
		products[item] = Number(price);
	});
	const sortedProducts = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));
	let initial = '';
	console.log(initial);
	sortedProducts.forEach(element => {
		const currentInitial = element[0][0];
		if (currentInitial !== initial) {
			initial = currentInitial;
			console.log(initial);
		}
		console.log(`  ${element[0]}: ${element[1]}`);
	});
}
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);