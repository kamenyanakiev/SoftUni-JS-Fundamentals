function theIsleOfManTtRace(array) {
  const hashChecker = /(?<hash>\#[A-Za-z]+\#)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const dollarChecker = /(?<dollar>\$[A-Za-z]+\$)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const percentChecker = /(?<percent>\%[A-Za-z]+\%)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const starChecker = /(?<star>\*[A-Za-z]+\*)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const andChecker = /(?<and>\&[A-Za-z]+\&)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const nameAndCoordinatesChecker = /(?<name>[A-Za-z]+)[\#|\$|\*|\%|\&]=(?<digits>\d+)!!(?<coordinates>.+)/;
  array.forEach(element => {
    if (isValid(element)) {
      let result = nameAndCoordinatesChecker.exec(element);
      let resultName = result.groups.name;
      let resultCoordinates = result.groups.coordinates;
      let decriptedCoordinates = decriptCoordinates(resultCoordinates, result.groups.digits);
      console.log(`Coordinates found! ${resultName} -> ${decriptedCoordinates}`)
    } else {
      console.log('Nothing found!');
    };
  });
  
  function isValid(string) {
    let result = 0;
    if (hashChecker.test(string)) {
      result = hashChecker.exec(string);
    } else if (dollarChecker.test(string)) {
      result = dollarChecker.exec(string);
    } else if (percentChecker.test(string)) {
      result = percentChecker.exec(string);
    } else if (starChecker.test(string)) {
      result = starChecker.exec(string);
    } else if (andChecker.test(string)){
      result = andChecker.exec(string);
    } else {
      return false;
    }
    if (Number(result.groups.digits) === result.groups.coordinates.length) {
      return true;
    } else {
      return false;
    };
  }

  function decriptCoordinates(resultCoordinates, digits) {
    let decripted = '';
    const decoder = Number(digits);
    for (let i = 0; i < resultCoordinates.length; i++) {
      let charCode = resultCoordinates[i].charCodeAt();
      charCode += decoder;
      let decodedChar = String.fromCharCode(charCode);
      decripted += decodedChar;
    }
    return decripted;
  }
}
theIsleOfManTtRace([
  '%GiacomoAgostini%=7!!hbqw',
  '&GeoffDuke*=6!!vjh]zi',
  'JoeyDunlop=10!!lkd,rwazdr',
  'Mike??Hailwood=5!![pliu',
  '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]);