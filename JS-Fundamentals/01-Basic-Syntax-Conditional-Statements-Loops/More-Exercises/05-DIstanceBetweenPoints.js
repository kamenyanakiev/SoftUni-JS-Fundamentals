function distanceBetweenPoints(a, b, c, d) {
    let diffOne = Math.abs((c - a) * (c - a));
    let diffTwo = Math.abs((d - b) * (d - b));
    console.log(Math.sqrt(diffOne + diffTwo));
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);