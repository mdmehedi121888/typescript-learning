"use strict";
//-----nullish coalescing operator only used when value is undefined or null------
const isAuthenticated = null;
const isAuthenticated1 = undefined;
const res = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
const res1 = isAuthenticated1 !== null && isAuthenticated1 !== void 0 ? isAuthenticated1 : "guest";
console.log(res, res1);
