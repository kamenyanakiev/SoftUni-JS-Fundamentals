function blackFlag(array) {
    const days = Number(array.shift());
    const plunderPerDay = Number(array.shift());
    const expectedPlunder = Number(array.shift());
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += plunderPerDay;
        if (i % 3 === 0) {
            totalPlunder += (0.5 * plunderPerDay);
        }
        if (i % 5 === 0) {
            totalPlunder -= (totalPlunder * 0.3);
        } 
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag([ '10', '20', '380' ]);