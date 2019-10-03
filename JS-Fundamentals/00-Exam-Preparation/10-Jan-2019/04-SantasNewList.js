function santasNewList(array) {
  let listOfChildren = {};
  let listOfToys = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'END') {
      break;
    }
    if (array[i].includes('Remove')) {
      removeFromList(array[i]);
    } else {
      addToList(array[i]);
    }
  }

  logChildren(listOfChildren);
  logToys(listOfToys);

  function addToList(string) {
    let [name, toy, amount] = string.split('->');
    if (listOfChildren.hasOwnProperty(name)) {
      listOfChildren[name].amount += Number(amount);
    } else {
      listOfChildren[name] = {
        name: name,
        amount: Number(amount)
      }
    }
    if (listOfToys.hasOwnProperty(toy)) {
      listOfToys[toy].amount += Number(amount);
    } else {
      listOfToys[toy] = {
        toy: toy,
        amount: Number(amount)
      }
    }
  }

  function removeFromList(string) {
    let name = string.split('Remove->');
    name = name[1];
    delete listOfChildren[name];
  }

  function logChildren(listOfChildren) {
    let listOfChildrenArr = [];
    for (const [key, value] of Object.entries(listOfChildren)) {
      listOfChildrenArr.push(value);
    }
    listOfChildrenArr.sort(compareNames);
    console.log('Children:');
    listOfChildrenArr.forEach(element => {
      console.log(`${element.name} -> ${element.amount}`)
    });
  }

  function logToys(listOfToys) {
    let listOfToysArr = [];
    for (const [key, value] of Object.entries(listOfToys)) {
      listOfToysArr.push(value);
    }
    console.log('Presents:');
    listOfToysArr.forEach(element => {
      console.log(`${element.toy} -> ${element.amount}`);
    });
  }

  function compareNames(a, b) {
    if (a.amount > b.amount) {
      return -1;
    } else if (a.amount < b.amount) {
      return 1;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  }

}
santasNewList([
  'Teddy->Clothes->8',
  'Johny->Toys->10',
  'Freddie->Candy->30',
  'Johny->Candy->20',
  'Carrie->Phone->1',
  'Carrie->Tablet->1',
  'Carrie->Candy->10',
  'Teddy->Toys->5',
  'Remove->Teddy',
  'END'
]);