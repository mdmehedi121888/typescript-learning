//--------------question 4 ----------------

// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

// -----------first method-------------
//const reverseArray = (arr: any[]): any[] => arr.reverse();

//-----------2nd method using generecis that accecpts any array type----------

const reverseArray = <T>(arr: T[]): T[] => [...arr].reverse();

console.log(reverseArray(["apple", "banana", "cherry"]));

console.log(reverseArray([10, 20, 30]));
