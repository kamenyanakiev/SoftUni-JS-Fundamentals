function employees(array) {
  class Employee {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }
  }
  let people = [];
  for (let i = 0; i < array.length; i++) {
    let idNumber = array[i].length;
    let person = new Employee(array[i], idNumber);
    people.push(person);
  }
  people.forEach((i) =>
    console.log(`Name: ${i.name} -- Personal Number: ${i.personalNumber}`));
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);