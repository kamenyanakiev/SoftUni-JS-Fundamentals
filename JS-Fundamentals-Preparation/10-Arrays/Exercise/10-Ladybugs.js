function ladybugs(inArray) {
  let ladybugArray = [];
  for (let i = 0; i < inArray[0]; i++) {
    let arrayFiller = inArray[1].split(' ');
    if (arrayFiller[i] === '1'){
      ladybugArray.push(1);
    } else {
      ladybugArray.push(0);
    }
  }
  for (let j = 2; j < inArray.length; j++) {
    let input = inArray[j];
    input.split(' ');
    
    
    
  }
  console.log(ladybugArray);
  
  
}
ladybugs([3, '0 1', '0 right 1', '2 right 1'])