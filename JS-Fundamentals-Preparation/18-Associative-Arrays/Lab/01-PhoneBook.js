function phoneBook(array) {
  let phoneNumbers = [];
  for (const string of array) {
    let [name, number] = string.split(' ');
    phoneNumbers[name] = number;
  }
  for (const key in phoneNumbers) {
    console.log(`${key} -> ${phoneNumbers[key]}`);
  }
}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);