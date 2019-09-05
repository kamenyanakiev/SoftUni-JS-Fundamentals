function matchPhoneNumber(phones) {
  const validator = /\+359(:?[ -])2\1\d{3}\1\d{4}\b/g;
  let result = [];
  let validPhone = null;
  while((validPhone = validator.exec(phones)) !== null){
    result.push(validPhone[0]);
  }
  console.log(result.join(', '));
}
matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');