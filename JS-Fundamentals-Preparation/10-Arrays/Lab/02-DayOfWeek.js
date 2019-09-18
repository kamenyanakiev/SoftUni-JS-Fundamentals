function dayOfWeek(input) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if(input > 0 && input < 8){
    console.log(days[input - 1]);
  } else {
    console.log('Invalid day!');
  }
}
dayOfWeek(3);