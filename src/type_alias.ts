//--------------type alias-----------------

type Student = {
  name: string;
  gender: string;
  contact?: string;
};

const student1: Student = {
  name: "xyz",
  gender: "male",
};

const student2: Student = {
  name: "xyz",
  gender: "male",
};
//---------------string type alias---------------
type UserName = string;

const username: UserName = "hello121";

//-----------------function type alias-------------

type Add = (num1: number, num2: number) => number;

const sum: Add = (x, y) => x + y;
