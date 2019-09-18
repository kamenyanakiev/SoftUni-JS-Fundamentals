function googleSearches(input) {
  const totalDays = Number(input.shift());
  const users = Number(input.shift());
  const moneyPerSearch = Number(input.shift());
  let totalMoney = 0;
  let userCounter = 0;
  for (let i = 0; i < input.length; i++) {
    let word = Number(input[i]);
    let currentUserMoney = 0;
    userCounter++;
    if (word <= 5) {
      if (word === 1) {
        currentUserMoney += (totalDays * (moneyPerSearch * 2));
      } else {
        currentUserMoney += (totalDays * moneyPerSearch);
      }
      if (userCounter % 3 === 0) {
        currentUserMoney *= 3;
      }
    }
    totalMoney += currentUserMoney;
  }
  console.log(`Total money earned for ${totalDays} days: ${totalMoney.toFixed(2)}`);
}
googleSearches([ '5', '2', '5.5', '6', '1' ]);