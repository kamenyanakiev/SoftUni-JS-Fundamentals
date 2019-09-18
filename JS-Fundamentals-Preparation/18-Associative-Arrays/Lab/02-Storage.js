function storage(array) {
  let products = new Map();
  for (const string of array) {
    let [product, quantity] = string.split(' ');
    quantity = Number(quantity);
    if (products.has(product)) {
      quantity += products.get(product);
    }
    products.set(product, quantity);
  }
  for (const productQuantity of products.entries()) {
    console.log(`${productQuantity[0]} -> ${productQuantity[1]}`);
  }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);