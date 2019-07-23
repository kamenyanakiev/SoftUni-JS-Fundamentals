function carWash(input) {
  let cleaner = 0;
  for (let i = 0; i < input.length; i++) {
    let action = input[i];
    if (action === 'soap') {
      cleaner += 10;
    } else if (action === 'water'){
      cleaner += (cleaner * 0.2);
    } else if (action === 'vacuum cleaner'){
      cleaner += (cleaner * 0.25);
    } else if (action === 'mud'){
      cleaner -= (cleaner * 0.1);
    }
  }
  console.log(`The car is ${cleaner.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);