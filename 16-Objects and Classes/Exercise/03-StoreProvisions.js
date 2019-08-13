function storeProvisions(stock, delivery) {
  class InStock {
    constructor(item, quantity) {
      this.item = item;
      this.quantity = quantity;
    }
  }
  let itemArray = [];
  for (let i = 0; i < stock.length; i += 2) {
    let itemName = stock[i];
    let itemQuantity = Number(stock[i + 1]);
    let currentItem = new InStock(itemName, itemQuantity);
    itemArray.push(currentItem);
  }
  for (let i = 0; i < delivery.length; i += 2) {
    let itemName = delivery[i];
    let itemQuantity = Number(delivery[i + 1]);
    let isContained = false;
    for (let j = 0; j < itemArray.length; j++) {
      if (itemArray[j].item === itemName) {
        itemArray[j].quantity += itemQuantity;
        isContained = true;
        break;
      }
    }
    if (!isContained) {
      let currentItem = new InStock(itemName, itemQuantity);
      itemArray.push(currentItem);
    }
  }
  itemArray.forEach((i) =>
    console.log(`${i.item} -> ${i.quantity}`));
}
storeProvisions(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);