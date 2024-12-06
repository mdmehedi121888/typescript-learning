"use strict";
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
            this.name = name;
            this.species = species;
        }
        displayDog() {
            console.log(`This is a function inside the Dog class`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
            this.name = name;
            this.species = species;
        }
        displayCat() {
            console.log(`This is a function inside the Cat class`);
        }
    }
    const dog = new Dog("German shepard", "dog");
    const cat = new Cat("persian", "cat");
    //----------checking instance of which is Dog obj or not------
    const isCheck = (animal) => {
        if (animal instanceof Dog)
            console.log("This is a dog");
        else
            console.log("This is a cat");
    };
    isCheck(cat);
}
