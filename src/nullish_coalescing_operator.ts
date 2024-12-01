//-----nullish coalescing operator only used when value is undefined or null------

const isAuthenticated = null;
const isAuthenticated1 = undefined;

const res = isAuthenticated ?? "guest";
const res1 = isAuthenticated1 ?? "guest";
console.log(res, res1);
