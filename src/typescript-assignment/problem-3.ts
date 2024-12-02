//---------------question 3---------------

// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((e) => e % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
