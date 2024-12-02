"use strict";
//----------------question-----------
// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
const findLargestNumber = (numbers) => {
    let x = -Infinity;
    numbers.forEach((element) => {
        if (element >= x)
            x = element;
    });
    //   return x;
    // ------------using build methods----------
    //return Math.max(...numbers);
    return numbers.reduce((max, current) => (current > max ? current : max), -Infinity);
};
console.log(findLargestNumber([10, 5, 8, 20, 3]));
