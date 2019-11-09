function towns(array) {
	class Town {
		constructor(name, latitude, longitude) {
			this.name = name;
			this.latitude = latitude;
			this.longitude = longitude;
		}

		printInfo() {
			console.log(`{ town: '${this.name}', latitude: '${Number(this.latitude).toFixed(2)}', longitude: '${Number(this.longitude).toFixed(2)}' }`)
		}
	}

	for (let i = 0; i < array.length; i++) {
		let [name, latitude, longitude] = array[i].split(' | ');
		let town = new Town(name, latitude, longitude);
		town.printInfo()
	}
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);