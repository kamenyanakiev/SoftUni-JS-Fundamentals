function aMinerTask(array) {
    let minedResources = {};
    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let quantity = Number(array[i + 1]);
        if (!minedResources.hasOwnProperty(resource)) {
            minedResources[resource] = quantity;
        } else {
            minedResources[resource] += quantity;
        }
    }

    printMinedResources(minedResources);

    function printMinedResources(minedResources) {
        for (const property of Object.keys(minedResources)) {
            console.log(`${property} -> ${minedResources[property]}`);
        }
    }
}
aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17' ]);