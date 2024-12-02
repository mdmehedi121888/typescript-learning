"use strict";
//----------------question--------------
// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
{
    const student1 = {
        name: "mehedi",
        age: 25,
        grades: [75, 80, 82, 88, 90],
    };
    const calculateAverageGrade = (student1) => {
        if (student1.grades.length === 0)
            throw new Error("Grades array cannot be empty");
        const total = student1.grades.reduce((sum, cur) => sum + cur, 0);
        const average = total / student1.grades.length;
        return average;
    };
    const averageGradeForBob = calculateAverageGrade(student1);
    console.log(`Average grade of ${student1.name} : ${averageGradeForBob}`);
}
