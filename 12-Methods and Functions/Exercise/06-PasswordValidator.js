function passwordValidator(password) {
  const regex = new RegExp('[^A-Za-z0-9]+');
  let isValidPw = !regex.test(password);
  let validPass = true;
  let numberCounter = 0;
  if (password.length < 6 || password.length > 10) {
    console.log('Password must be between 6 and 10 characters');
    validPass = false;
  }
  if (!isValidPw) {
    console.log('Password must consist only of letters and digits');
    validPass = false;
  }
  for (let i = 0; i < password.length; i++) {
    if (numberCounter >= 2) {
      break;
    }
    if (Number(password[i])) {
      numberCounter++;
    }
  }
  if (numberCounter < 2) {
    console.log('Password must have at least 2 digits');
    validPass = false;
  }
  if (validPass){
    console.log('Password is valid');
  } 
}
passwordValidator('s4ad45');