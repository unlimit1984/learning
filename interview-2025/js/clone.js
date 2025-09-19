// Problem with spread operator when cloning objects
// let user = { name: "John", age: 30, address: { city: "New York" } };
// let userCopy = { ...user };
// userCopy.address.city = "London";
// console.log(user);

// Fix 1 with structuredClone
// let user = { name: "John", age: 30, address: { city: "New York" } };
// let userCopy = structuredClone(user);
// userCopy.address.city = "London";
// console.log(user)

// Fix 2 with JSON parser
let user = { name: "John", age: 30, address: { city: "New York" } };
let userCopy = JSON.parse(JSON.stringify(user));
userCopy.address.city = "London";
console.log("original", user);
console.log("copy", userCopy);
