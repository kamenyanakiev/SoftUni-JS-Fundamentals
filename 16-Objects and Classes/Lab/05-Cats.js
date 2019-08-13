function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  for (let i = 0; i < array.length; i++) {
    let newCat = new Cat(array[i].split(' ')[0], array[i].split(' ')[1]);
    console.log(`${newCat.name}, age ${newCat.age} says Meow`);
  }
}
cats(['Mellow 2', 'Tom 5']);