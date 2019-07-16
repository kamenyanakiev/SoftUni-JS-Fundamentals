function orders(product, quantity) {
  product = product;
  quantity = Number(quantity);
  let sum;
  if (product === 'water') {
    sum = (quantity) => quantity * 1;
  } else if (product === 'coffee') {
    sum = (quantity) => quantity * 1.5;
  } else if (product === 'coke') {
    sum = (quantity) => quantity * 1.4;
  } else if (product === 'snacks') {
    sum = (quantity) => quantity * 2;
  }
  console.log(sum(quantity).toFixed(2));
}
orders('coffee', 5);