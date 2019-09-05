function matchFullName(names) {
  const validator = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let validNames = [];
  let validName = null;
  while((validName = validator.exec(names)) !== null){
    validNames.push(validName[0]);
  }
  console.log(validNames.join(' '));
}
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov');