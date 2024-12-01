//------------normal funciton-----------

function add(x: number, y: number): number {
  return x + y;
}

add(2, 3);

//-------------arrow funciton------------

const add2 = (x: number, y: number): number => x + y;

add2(4, 5);

//-----object --> function ----> method

const userDetails: {
  name: string;
  balance: number;
  addBalance: (balance: number) => string;
} = {
  name: "mehedi",
  balance: 0,
  addBalance(balance: number): string {
    return `New balance ${this.balance + balance}`;
  },
};

const numbers: number[] = [4, 5, 6];

const newArr: number[] = numbers.map((ele: number): number => ele * ele);

console.log(newArr);

//-----------spread operator--------

const first: number[] = [1, 2, 3];

const second: number[] = [3, 4, 5];

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

const intern = {
  ...mes,
  ...adm,
};

console.log(intern);

//---------------rest operator---------------

const friends = (...names: string[]): string => {
  return names.map((name: string) => `name: ${name}`).join(", ");
};
friends("abdul", "momen", "badsah");
