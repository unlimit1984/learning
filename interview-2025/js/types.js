console.log("====== 6 Primitive types =======");
//Undefined
let undefinedVar;
console.log(typeof undefinedVar, undefinedVar);
//Boolean
let booleanVar = true;
console.log(typeof booleanVar, booleanVar);
//Number
let numberVar = 1234444545454545454545454;
console.log(typeof numberVar, numberVar);
//String
let stringVar = "abc";
console.log(typeof stringVar, stringVar);
//Symbol
let symbolVar = Symbol("abc");
console.log(typeof symbolVar, symbolVar);
//BitInt
let bigIntVar = 19241924124n; //bigIntVar2 = BigInt(19241924124);
console.log(typeof bigIntVar, bigIntVar);
console.log("=====Special primitive type (Object) ========");
let nullVar = null;
console.log(typeof nullVar);
console.log("====== Ссылочные типы (Reference Types) =======");
// Object
let obj = { a: 1, b: 2 };
console.log(typeof obj, obj);
//Array
let arrayVar = [1, 2, 3];
arrayVar.push(4);
console.log(typeof arrayVar, arrayVar);
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
console.log("_____");
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
console.log(Array.isArray(colors)); // true (правильный способ проверки на массив)
//Map
// let mapVar = new Map([
//   ['a', 1],
//   ['b', 2]]
// );
let mapVar = new Map();
mapVar.set("a", 1).set("b", 2);
console.log(typeof mapVar, mapVar);
//Set
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add({ name: "Mary" });
console.log(typeof set, set);
//Date
let date = new Date();
console.log(typeof date, date);
// RegExp
// Литерал (чаще используется)
const regExp = /hello/i;
// Конструктор (удобно, если паттерн формируется динамически)
// const pattern = 'hello';
// const flags = 'i';
// const regExp = new RegExp(pattern, flags);
console.log(typeof regExp, regExp);
// Error
const error = new Error("Что-то пошло не так!");
console.log(typeof error, error);
// Functions
function func() {}
console.log(typeof func);
//Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
console.log(typeof myPromise, myPromise);

console.log("=== var, const, let =====");
console.log("Start");
console.log(byVar);
var byVar = 5;
let byLet = 10;
const byConst = 15;
console.log("End");

function example() {
  console.log(xx);
  if (true) {
    var xx = 10; // Объявлена внутри блока if
    console.log(xx); // 10 (доступна здесь)
  }
  console.log(xx); // 10 (доступна и здесь, вне блока!)
}
example();
// console.log(xx); // ReferenceError: x is not defined (а здесь уже НЕ доступна)

console.log("==== instanceof ====");
//Array
const fakeArray = { 0: "a", 1: "b", length: 2 };
console.log("instanceof Map", fakeArray instanceof Map, fakeArray); // false
//Map
let myMap;
// myMap = { 0: 'a', 1: 'b'};
// myMap = [ ['a', 1], ['b', 2]];
myMap = new Map([
  ["a", 1],
  ["b", 2],
  [3, "c"],
]);
// myMap = new Map();
console.log(myMap, "instanceof Map", myMap instanceof Map);
console.log(myMap, "instanceof Object", myMap instanceof Object);
//Set
let mySet = new Set(["abc", "def", "ghi"]);
console.log(mySet, "instanceof Set", myMap instanceof Map);
console.log(mySet, "instanceof Object", myMap instanceof Object);

const obj2 = { 0: "a", 1: "b", length: 2 };
console.log(obj2 instanceof Object, obj2); // false

const date2 = new Date();
console.log(date2 instanceof Date, date2);
console.log(date2 instanceof Object, date2);

console.log("====== Operations with Array");
console.log("isArray", Array.isArray([])); // true

console.log("====== Operations with Map");
let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

console.log("====Just exercises======");
let aa = 123.4;
console.log(typeof aa, aa);
aa = "abc";
console.log(typeof aa, aa);

let bb = Math.pow(2, 70);
console.log(typeof bb, bb);

let x;
x = 10;
console.log(typeof x, x);
x = "hello";
console.log(typeof x, x);

console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true

function User() {}
let user = new User();
console.log(john instanceof User); // true

const ups = { a: 1, b: 2, c: 3 };
delete ups.a;
ups.b = 6;
console.log(ups);

var a = 5;
function foo() {
  console.log(a);
  // undefined
  var a = 10;
  console.log(a);
  // 10
}
foo();
console.log(a);
