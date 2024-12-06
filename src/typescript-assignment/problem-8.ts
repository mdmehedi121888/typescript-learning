//-----------question-------------
// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}
  displayInfo() {
    console.log(
      `"Your car model is:  ${this.year} ${this.brand} ${this.model}"`
    );
  }
}

const obj1 = new Car("Toyota", "Corolla", 2020);
obj1.displayInfo();
