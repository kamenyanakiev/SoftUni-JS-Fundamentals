function theIsleOfManTtRace(array) {
  const hashChecker = /(?<hash>\#[A-Za-z]+\#)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const dollarChecker = /(?<dollar>\$[A-Za-z]+\$)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const percentChecker = /(?<percent>\%[A-Za-z]+\%)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const starChecker = /(?<star>\*[A-Za-z]+\*)=(?<digits>\d+)!!(?<coordinates>.+)/;
  const andChecker = /(?<and>\&[A-Za-z]+\&)=(?<digits>\d+)!!(?<coordinates>.+)/;
  array.forEach(element => {
  
    console.log(isValid(element))
  });
  function isValid(string) {
    if (hashChecker.test(string)) {
      console.log(string.groups.digits);
      
      return true;
    } else if (dollarChecker.test(string)) {
      return true;
    } else if (percentChecker.test(string)) {
      return true;
    } else if (starChecker.test(string)) {
      return true;
    } else if (andChecker.test(string)){
      return true;
    } else {
      return false;
    }
  }
  //(?=[#&$%*])[A-Za-z]+(?<=[#&$%*])
  //(?=\#)[A-Za-z]+(?<=\#)
}
theIsleOfManTtRace([
  '%GiacomoAgostini%=7!!hbqw',
  '&GeoffDuke*=6!!vjh]zi',
  'JoeyDunlop=10!!lkd,rwazdr',
  'Mike??Hailwood=5!![pliu',
  '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]);