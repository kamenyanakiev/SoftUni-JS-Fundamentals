function race(array) {
    const participants = array.shift().split(', ');
    let participantPoints = {};
    array.forEach(element => {
        let person = element.replace(/[^a-zA-Z]+/g, '');
        if (participants.includes(person)) {
            if (!participantPoints.hasOwnProperty(person)) {
                participantPoints[person] = 0;
            }

            let points = element.replace(/[^0-9]+/g, '');
            let result = 0;

            for (let i = 0; i <= points.length-1; i++) {
                result += Number(points[i]);
            }
            participantPoints[person] += result;
        }
        
    });

    let sortable = [];
    for (let person in participantPoints) {
        sortable.push([person, participantPoints[person]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    console.log(`1st place: ${sortable[0][0]}`);
    console.log(`2nd place: ${sortable[1][0]}`);
    console.log(`3rd place: ${sortable[2][0]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]);