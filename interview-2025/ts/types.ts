// 6 primitive types
console.log('=============')
let undefinedVar;
console.log(typeof undefinedVar, undefinedVar);

let booleanVar = true;
console.log(typeof booleanVar, booleanVar);

let numberVar = 1234444545454545454545454;
console.log(typeof numberVar, numberVar);

let stringVar = 'abc';
console.log(typeof stringVar, stringVar);

let symbolVar = Symbol('abc');
console.log(typeof symbolVar, symbolVar);

// let bigIntVar = 19241924124n; //bigIntVar2 = BigInt(19241924124);
let bigIntVar2 = BigInt(19241924124);
console.log(typeof bigIntVar2, bigIntVar2);

console.log('=============')
//Object
let nullVar = null;
console.log(typeof nullVar);

// let mapVar = new Map([
//   ['a', 1],
//   ['b', 2]]
// );
let mapVar = new Map();
mapVar.set('a', 1).set('b', 2);
console.log(typeof mapVar, mapVar);

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

let arrayVar = [1, 2, 3];
console.log(typeof arrayVar, arrayVar);

// let aa=123;
// console.log(typeof aa, aa);
// aa= 'abc'
// console.log(typeof aa, aa);

let pidgey: any = 1991;
console.log(typeof pidgey) // number

pidgey = "bird";
console.log(typeof pidgey) // string

pidgey = false;
console.log(typeof pidgey) // boolean

pidgey = null;
console.log(typeof pidgey) // object

pidgey = undefined;
console.log(typeof pidgey) // undefined

let arr2: Array<number> = [1, 2, 3];
console.log(typeof arr2, arr2);

//JUST TS Types
//any, unknown, never, tuple, enum, union, intersection, type alias, interface

//Types VS Interfaces
type OrderNumber = string;
const myOrderNumber: OrderNumber = '31337';
// console.log(typeof myOrderNumber, instanceof myOrderNumber, myOrderNumber);
