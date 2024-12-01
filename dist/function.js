"use strict";
//------------normal funciton-----------
function add(x, y) {
    return x + y;
}
add(2, 3);
//-------------arrow funciton------------
const add2 = (x, y) => x + y;
add2(4, 5);
//-----object --> function ----> method
const userDetails = {
    name: "mehedi",
    balance: 0,
    addBalance(balance) {
        return `New balance ${this.balance + balance}`;
    },
};
const numbers = [4, 5, 6];
const newArr = numbers.map((ele) => ele * ele);
console.log(newArr);
//-----------spread operator--------
const first = [1, 2, 3];
const second = [3, 4, 5];
first.push(...second);
console.log(first);
const mes = {
    frontend: "hridoy",
    backend: "ajoy",
    devops: "mehedi",
};
const adm = {
    frontend1: "akash",
    backend1: "ontor",
    devops1: "nahid",
};
const intern = Object.assign(Object.assign({}, mes), adm);
console.log(intern);
//---------------rest operator---------------
const friends = (...names) => {
    return names.map((name) => `name: ${name}`).join(", ");
};
friends("abdul", "momen", "badsah");
