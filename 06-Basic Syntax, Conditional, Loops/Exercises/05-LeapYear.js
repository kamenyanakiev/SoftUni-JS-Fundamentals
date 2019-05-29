function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log('yes');
    return;
  } else if (year % 400 === 0) {
    console.log('yes');
    return;
  } else {
    console.log('no');
  }
}
leapYear(4);