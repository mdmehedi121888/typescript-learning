"use strict";
{
    //---------------example of type guard--------------
    const add = (num1, num2) => {
        if (typeof num1 === "number" && typeof num2 === "number")
            return num1 + num2;
        else
            return `${num1} + ${num2}`;
    };
    console.log(add(2, 3));
    console.log(add("2", 3));
    const getUser = (user) => {
        if ("role" in user)
            return `name: ${user.name} role: ${user.role}`;
        else
            return `name: ${user.name} role: user`;
    };
    const normalUser = {
        name: "mehedi",
    };
    const adminUser = {
        name: "admin",
        role: "admin",
    };
    console.log(getUser(normalUser));
    console.log(getUser(adminUser));
}
