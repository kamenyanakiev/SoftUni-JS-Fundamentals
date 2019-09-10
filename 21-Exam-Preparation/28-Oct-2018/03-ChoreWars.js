function choreWars(array) {
  array.pop();
  const dishes = /(?<=\<)[a-z0-9]+(?=\>)/; // Checks for requirements between <>
  const houseCleaning = /(?<=\[)[A-Z0-9]+(?=\])/; // Checks for requirements between []
  const laundry = /(?<={).+(?=})/; // Checks for requirements between {}
  let dishesTime = 0;
  let houseCleaningTime = 0;
  let laundryTime = 0;
  let totalCleaningTime = 0;

  for (const element of array) {
    let dishesRegex = dishes.exec(element);
    let houseCleaningRegex = houseCleaning.exec(element);
    let laundryRegex = laundry.exec(element);
    if (dishesRegex) {
      dishesTime += calculateTime(dishesRegex[0]);
    } else if (houseCleaningRegex) { 
      houseCleaningTime += calculateTime(houseCleaningRegex[0]);
    } else if (laundryRegex) {
      laundryTime += calculateTime(laundryRegex[0]);
    } 
  }
  console.log(`Doing the dishes - ${dishesTime} min.`);
  console.log(`Cleaning the house - ${houseCleaningTime} min.`);
  console.log(`Doing the laundry - ${laundryTime} min.`);
  console.log(`Total - ${totalCleaningTime} min.`);
  
  function calculateTime(string) {
    const numberChecker = /\d/g;
    const nums = string.match(numberChecker);
    let sum = 0;
    for (const num of nums) {
      sum += Number(num);
    }
    totalCleaningTime += sum;
    return sum;
  }
}
choreWars([ 'Vo.|1zps {lo2a}zgVGk{1)N+',
'Asdad123zxc{3]',
'R[A [F67G9C]6e3C@',
'MVo.|1zpshM<9) <d85ifkh59votu>@',
'<dm0g2y34mw1kpds2>iD|"p',
'wife is happy']);