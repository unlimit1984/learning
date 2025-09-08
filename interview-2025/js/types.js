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
//Class
class MyUser {
  constructor(name, age) {
    if (!name || !age) {
      throw new Error("Все поля (name, age) обязательны");
    }
    this.name = name;
    this.age = age;
  }
}
console.log("typeof MyUser", typeof MyUser, MyUser);

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
console.log("typeof func", typeof func);
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

console.log("==== тоже про readonly ====");
// 1. Функция-валидатор
function validateUser(user) {
  const requiredFields = ["name", "email", "age"];
  for (const field of requiredFields) {
    if (!(field in user)) {
      throw new Error(`Поле ${field} обязательно`);
    }
  }
  return true;
}
// Использование
const u = { name: "John", email: "john@example.com", age: 30 };
try {
  validateUser(u);
  console.log("Все обязательные поля присутствуют");
} catch (error) {
  console.error(error.message);
}
//2. В классах (Конструктор)
class User0 {
  constructor(name, email, age) {
    if (!name || !email || !age) {
      throw new Error("Все поля (name, email, age) обязательны");
    }

    this.name = name;
    this.email = email;
    this.age = age;
  }
}
// Использование
let user0;
try {
  user0 = new User0("John", "john@example.com", 30);
  console.log("typeof user", typeof user0, user0);
} catch (error) {
  console.error(error.message);
  console.log("typeof user", typeof user0, user0);
}
// 4. Продвинутый с помощью геттеров/сеттеров
class User00 {
  constructor() {
    this._requiredFields = ["name", "email", "age"];
    this._data = {};
  }
  setField(name, value) {
    this._data[name] = value;
    return this;
  }
  _validate() {
    for (const field of this._requiredFields) {
      if (!(field in this._data)) {
        throw new Error(`Поле ${field} обязательно`);
      }
    }
  }
  complete() {
    this._validate();
    return Object.freeze(this._data); // Возвращаем неизменяемый объект
  }
}

// Использование
const user00 = new User00();
user00
  .setField("name", "John")
  .setField("email", "john@example.com")
  .setField("age", 30);

const userData = user00.complete(); // Получаем валидированный объект

console.log("==== Proxy ====");
const person = {
  name: "Анна",
  age: 25,
};
// Проверяем существование свойств
console.log("name" in person); // true - свойство существует
console.log("salary" in person); // false - свойства нет
// Используем наше выражение
function getValue(obj, propName) {
  return propName in obj ? obj[propName] : 37;
}
console.log(getValue(person, "name")); // "Анна" (свойство есть)
console.log(getValue(person, "age")); // 25 (свойство есть)
console.log(getValue(person, "salary")); // 37 (свойства нет)

var handler = {
  get: function (target, name) {
    return name in target ? target[name] : 37;
  },
  set: function (target, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }
    // Стандартное сохранение значения
    obj[prop] = value;
    // Обозначить успех
    return true;
  },
};
const person2 = {
  name: "John",
  age: 20,
};
const proxy = new Proxy(person2, handler);
// proxy.age = "30";
console.log("proxy.nodDefined", proxy.nodDefined);

console.log("==== instanceof ====");
//Array
const fakeArray = { 0: "a", 1: "b", length: 2 };
console.log(fakeArray, "instanceof Map", fakeArray instanceof Map); // false
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

function func() {
  console.log("myVar", myVar);
  if (true) {
    var myVar = 10;
  }
  console.log("myVar", myVar);
}
func();

function test() {
  if (true) {
    var x2 = 10; // Видна во всей функции!
  }
  console.log("var x2", x2); // 10 (доступна вне блока!)
}
test();
// console.log(x2); // ReferenceError: x is not defined

console.log("Object.defineProperty()");
const user8 = {};
Object.defineProperty(user8, "id", {
  value: 1,
  writable: false, // Нельзя изменять значение
  enumerable: true, // Будет видно в for-in
  configurable: false, // Нельзя удалить и переопределить
});
user8.id = 2; // ❌ Не сработает (в strict mode - TypeError)
console.log("user8.id", user8.id); // 1
// Проверка
console.log(Object.getOwnPropertyDescriptor(user, "id"));
// { value: 1, writable: false, enumerable: true, configurable: false }
console.log("===== Как сделать поле обязательным в интерфейсе =====");
console.log("===== keyof =====");
const obj3 = {
  name: "John",
  age: 30,
};
console.log("Object.keys(obj3)", Object.keys(obj3));
