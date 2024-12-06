class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} sounds like ${this.sound}`);
  }
}
const dog = new Animal("German shepard", "dog", "ghew ghew");
const cat = new Animal("persian", "cat", "mew mew");

dog.makeSound();
