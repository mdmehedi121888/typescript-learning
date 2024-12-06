"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} sounds like ${this.sound}`);
    }
}
const dog = new Animal("German shepard", "dog", "ghew ghew");
const cat = new Animal("persian", "cat", "mew mew");
dog.makeSound();
