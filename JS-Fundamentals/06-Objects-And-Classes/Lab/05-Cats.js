function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  for (let i = 0; i < array.length; i++) {
    let cat = new Cat(array[i].split(' ')[0], array[i].split(' ')[1]);
    console.log(`${cat.name}, age ${cat.age} says Meow`);
  }
}
cats(['Mellow 2', 'Tom 5']);