function furniture(array) {
  console.log('Bought furniture:');
  let totalSum = 0;
  array.forEach((line) => {
     const validChecker = />>(?<item>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d]+)/g;
     let result = validChecker.exec(line);
     if (result) { 
      let currentSum = (Number(result.groups.price) * Number(result.groups.quantity));
      totalSum += currentSum;
      console.log(result.groups.item);
     }
  });
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);