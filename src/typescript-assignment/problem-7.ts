//-------------question---------
// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

function logString(param: unknown) {
  if (typeof param === "string") console.log("Hello, TypeScript!");
  else throw new Error("Input is not a string.");
}

logString("5");
