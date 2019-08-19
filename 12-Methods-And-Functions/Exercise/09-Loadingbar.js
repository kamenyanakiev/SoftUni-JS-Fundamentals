function loadingBar(percent) {
  let percentage = new Array(10);
  percentage.fill('.')
  for (let i = 0; i < percent / 10; i++) {
    percentage[i] = '%';
  }
  if (percent < 100) {
    console.log(`${percent}% [${percentage.join('')}]`);
    console.log('Still loading...');
  } else if (percent === 100){
    console.log('100% Complete!');
    console.log(`[${percentage.join('')}]`);
  }
}
loadingBar(100);