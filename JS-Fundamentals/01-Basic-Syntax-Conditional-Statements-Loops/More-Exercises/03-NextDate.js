function nextDate(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
nextDate(2016, 9, 30);