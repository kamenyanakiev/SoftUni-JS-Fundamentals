function santasSecretHelper(array) {
  const decoder = Number(array.shift());
  const validStringChecker = /(?<=\@)[A-Z][a-z]+[^-@!>]\w+[!][G][!]/; // Checks if the string is valid
  const validNameChecker = /(?<=\@)[A-Z][a-z]+/; // Checks for a name after @
  const goodChecker = /(?<=\!)[G]/; // Checks if there is a !G
  let decodedArray = [];
  let goodNames = []; 
  array.forEach(line => {
    let decodedString = '';
    for (let i = 0; i < line.length; i++) {
      let charCode = line[i].charCodeAt();
      charCode -= decoder;
      let decodedChar = String.fromCharCode(charCode);
      decodedString += decodedChar;
    }
    decodedArray.push(decodedString);
  });
  for (const line of decodedArray) {
    let validString = validStringChecker.exec(line);
    if (validString) {
      let name = validNameChecker.exec(line);
      let good = goodChecker.exec(line);
      if (name && good) {
        goodNames.push(name[0]);
      }
    }
  }
  console.log(goodNames.join('\n'))
}
santasSecretHelper(['4',
  '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
  '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
  ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
  'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
  'DReh}e=<4lhzj1%K%',
  'end'
]);