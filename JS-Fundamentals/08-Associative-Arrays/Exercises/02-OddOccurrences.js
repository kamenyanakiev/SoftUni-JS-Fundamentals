function oddOccurrences(input) {
    let occurances = new Map();
    let inputArray = input.toLowerCase().split(' ');
    for (let i = 0; i < inputArray.length; i++) {
        let currentElement = inputArray[i];
        let repeated = 1;
        if (occurances.has(currentElement)) {
            repeated += occurances.get(currentElement);
        }
        occurances.set(currentElement, repeated);
    }
    let occuranceArray = [...occurances];
    let fitleredOccurance = occuranceArray.filter(element => element[1] % 2 !== 0);
    let result = [];
    fitleredOccurance.forEach(element => {
        result.push(element[0]);
    })
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');