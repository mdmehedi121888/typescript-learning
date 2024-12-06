{
  class Person {
    constructor(public name: string, public age: number) {}
    getHourSleep(hours: number) {
      console.log(`The ${this.name} sleeps ${hours} hour`);
    }
  }

  class Student extends Person {
    constructor(public name: string, public age: number) {
      super(name, age);
    }
  }

  class Teacher extends Person {
    constructor(
      public name: string,
      public age: number,
      public designation: string
    ) {
      super(name, age);
    }
    getTakeClass(hours: number) {
      console.log(`The ${this.name} takes ${hours} class`);
    }
  }

  const stuObj = new Student("hasan", 25);
  stuObj.getHourSleep(8);

  const teaObj = new Teacher("Mr. X ", 40, "Professor");
  teaObj.getTakeClass(6);
}
