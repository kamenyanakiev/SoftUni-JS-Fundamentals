function lastKNumberSequence(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let sum = 0;
    let lastThreeElements = result.slice(start);
    for (let number of lastThreeElements) {
      sum += number;
    }
    result.push(sum);
  }
  console.log(result.join(' '));
}
lastKNumberSequence(6, 3);