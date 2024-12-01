// ------------- number-------------

let x: number = 100;

//------------string-----------

let str: string = "welcome to the typescript world";

// -----------boolean------------

let flag: boolean = true;

//---------undefined---------

let s: undefined = undefined;

//------------null-----------

let y: null = null;

//-----------any----------

let d;

// ----------array-----------

let array: string[] = ["enosis", "tigerIt"];
let ar: (number | string)[] = [1, 2, 3];

// ---------tuple-----------

let arr: [string, number] = ["IT", 23606];

//---------object------------

const user: {
  readonly compnay: "walton"; // literal type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  IT: number;
  isMuslim: boolean;
} = {
  compnay: "walton",
  firstName: "mehedi",
  lastName: "hasan",
  IT: 23606,
  isMuslim: true,
};
