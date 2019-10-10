function distanceCalculator(array) {
    const stepsMade = Number(array.shift());
    const lengthOfOneStepInCm = Number(array.shift());
    const distanceNeededInMetres = Number(array.shift());
    let distanceTraveledCm = 0;
    for (let i = 1; i <= stepsMade; i++) {
        if (i % 5 === 0) {
            distanceTraveledCm += (lengthOfOneStepInCm * 0.70);
        } else {
            distanceTraveledCm += lengthOfOneStepInCm;
        }
    }
    distanceTraveledCm = distanceTraveledCm.toFixed(2);
    let distanceTraveledMetres = distanceTraveledCm / 100;
    let percentageTraveled = (distanceTraveledMetres / distanceNeededInMetres) * 100;
    console.log(`You travelled ${percentageTraveled.toFixed(2)}% of the distance!`);
}
distanceCalculator(['5000', '7.5', '500']);