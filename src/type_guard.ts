{
  //---------------example of type guard--------------
  const add = (num1: string | number, num2: string | number) => {
    if (typeof num1 === "number" && typeof num2 === "number")
      return num1 + num2;
    else return `${num1} + ${num2}`;
  };

  console.log(add(2, 3));
  console.log(add("2", 3));

  // ---------------------example of in guard-------------------

  type normalUserType = {
    name: string;
  };
  type adminUserType = {
    name: string;
    role: string;
  };
  const getUser = (user: normalUserType | adminUserType) => {
    if ("role" in user) return `name: ${user.name} role: ${user.role}`;
    else return `name: ${user.name} role: user`;
  };

  const normalUser: normalUserType = {
    name: "mehedi",
  };
  const adminUser: adminUserType = {
    name: "admin",
    role: "admin",
  };
  console.log(getUser(normalUser));
  console.log(getUser(adminUser));
}
