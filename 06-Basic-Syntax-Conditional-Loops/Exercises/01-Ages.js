function ages(input) {
  if (Number(input) >= 0 && Number(input) <= 2) {
    console.log('baby');
  } else if (Number(input) >= 3 && Number(input) <= 13) {
    console.log('child');
  } else if (Number(input) >= 14 && Number(input) <= 19) {
    console.log('teenager');
  } else if (Number(input) >= 20 && Number(input) <= 65) {
    console.log('adult');
  } else if (Number(input) >= 66) {
    console.log('elder');
  }
}
ages(20);