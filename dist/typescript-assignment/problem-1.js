"use strict";
//--------------question----------
// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
const repeatString = (str, n) => {
    //--------------1st method----------------
    //   let ans: string = "";
    //   let i: number = 1;
    //   for (; i <= n; ++i) {
    //     ans += str;
    //   }
    //   return ans;
    //-------------2nd method----------------
    return str.repeat(n);
};
console.log(repeatString("Hello!", 5));
