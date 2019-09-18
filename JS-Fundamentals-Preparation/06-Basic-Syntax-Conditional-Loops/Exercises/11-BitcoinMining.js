function bitcoinMining(input) {
  let dayCounter = 0;
  let totalMoney = 0;
  let dayMoney = 0;
  let bitcoin = 0;
  let firstPurchase = 0;
  for (let i = 0; i < input.length; i++) {
    dayCounter++;
    dayMoney = input[i] * 67.51;
    if (dayCounter % 3 === 0) {
      dayMoney *= 0.7;
    }
    totalMoney += dayMoney;
    while (totalMoney >= 11949.16) {
      totalMoney -= 11949.16;
      bitcoin++;
      if (firstPurchase === 0) {
        firstPurchase = i + 1;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
