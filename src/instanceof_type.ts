{
  class Animal {
    constructor(public name: string, public species: string) {}
  }
  class Dog extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }
    displayDog() {
      console.log(`This is a function inside the Dog class`);
    }
  }
  class Cat extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }
    displayCat() {
      console.log(`This is a function inside the Cat class`);
    }
  }
  const dog = new Dog("German shepard", "dog");
  const cat = new Cat("persian", "cat");
  //----------checking instance of which is Dog obj or not------
  const isCheck = (animal: Animal) => {
    if (animal instanceof Dog) console.log("This is a dog");
    else console.log("This is a cat");
  };

  isCheck(cat);
}
