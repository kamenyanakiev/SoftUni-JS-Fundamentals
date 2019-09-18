function employees(array) {
  class Employee {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }

    printName() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`)
    }
  }

  for (let i = 0; i < array.length; i++) {
    let idNumber = array[i].length;
    let person = new Employee(array[i], idNumber);
    person.printName();
  }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);