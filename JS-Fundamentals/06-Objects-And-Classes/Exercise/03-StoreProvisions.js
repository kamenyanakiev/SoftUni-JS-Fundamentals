function storeProvisions(stock, delivery) {
	let storage = {};

	for (let i = 0; i < stock.length; i += 2) {
		let item = stock[i];
		let quantity = stock[i + 1];

		storage[item] = Number(quantity);
	}

	for (let i = 0; i < delivery.length; i += 2) {
		let item = delivery[i];
		let quantity = delivery[i + 1];

		if (storage[item]) {
			storage[item] += Number(quantity)
		} else {
			storage[item] = quantity;
		}
	}

	for (let key in storage) {
		console.log(`${key} -> ${storage[key]}`)
	}
}
storeProvisions(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
	['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);