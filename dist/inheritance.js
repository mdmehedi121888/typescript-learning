"use strict";
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getHourSleep(hours) {
            console.log(`The ${this.name} sleeps ${hours} hour`);
        }
    }
    class Student extends Person {
        constructor(name, age) {
            super(name, age);
            this.name = name;
            this.age = age;
        }
    }
    class Teacher extends Person {
        constructor(name, age, designation) {
            super(name, age);
            this.name = name;
            this.age = age;
            this.designation = designation;
        }
        getTakeClass(hours) {
            console.log(`The ${this.name} takes ${hours} class`);
        }
    }
    const stuObj = new Student("hasan", 25);
    stuObj.getHourSleep(8);
    const teaObj = new Teacher("Mr. X ", 40, "Professor");
    teaObj.getTakeClass(6);
}
