function ages(age) {
    if (Number(age) >= 0 && Number(age) <= 2) {
        console.log('baby');
    } else if (Number(age) >= 3 && Number(age) <= 13) {
        console.log('child');
    } else if (Number(age) >= 14 && Number(age) <= 19) {
        console.log('teenager');
    } else if (Number(age) >= 20 && Number(age) <= 65) {
        console.log('adult');
    } else if (Number(age) >= 66) {
        console.log('elder');
    }
}
ages(20);