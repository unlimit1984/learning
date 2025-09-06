// Tasks

//1. GRID DYNAMICS
// const obj = {
//   async func() {
//     console.log('1');
//
//     setTimeout(() => {
//       console.log('2');
//     }, 0);
//
//     Promise.resolve().then(() => {
//       console.log('3');
//     });
//
//     (function () {
//       console.log('4');
//       const self = this;
//       console.log('5', self);
//     })();
//
//     await null;
//
//     console.log('6');
//   }
// };

// obj.func();
// console.log('7');

// const obj = {
//   async func() {
//     console.log('1');
//   }
// };
// obj.func();
// console.log('2');

// OUTPUT:

// 2
// const obj = {
//   name: 'Vasya',
//   regularFunc: function () {
//     console.log('regularFunc:', this.name);
//   },
//   arrowFunc: () => {
//     console.log('arrowFunc:', this.name);
//   }
// };
//
// obj.regularFunc(); // ?
// obj.arrowFunc();   // ?

// 3
// const obj = {
//   name: 'Vasya',
//   sayHello: function () {
//     console.log('outer:', this.name);
//
//     function inner() {
//       console.log('inner:', this.name);
//     }
//
//     inner();
//   }
// };
//
// obj.sayHello(); // ?

// 4
// function greet() {
//   console.log('Привет,', this.name);
// }
//
// const user = { name: 'Катя' };
// // greet.bind(user)();
// // greet.call(user);
// greet.apply(user);

// 5
// function sayHi(age) {
//   console.log(`Привет, я ${this.name}, мне ${age} лет`);
// }
//
// const person = { name: 'Лена' };
//
// sayHi.call(person, 30);   // ?
// sayHi.apply(person, [25]); // ?
// const bound = sayHi.bind(person, 20);
// bound(); // ?

// 6
// function makeAdder(a) {
//   return function (b) {
//     return a + b; // замкнули a
//   };
// }
//
// const add10 = makeAdder(10);
// console.log(add10(5));  // 15
// console.log(add10(42)); // 52

// 7
// function createCounter() {
//   let count = 0; // приватная переменная
//   return {
//     inc() { count++; },
//     dec() { count--; },
//     get() { return count; }
//   };
// }
//
// const c = createCounter();
// c.inc(); c.inc();
// console.log(c.get()); // 2
// console.log(typeof c.count); // "undefined" — снаружи доступа нет

// 8
// const withPrefix = (prefix) => (msg) => `[${prefix}] ${msg}`;
//
// const info = withPrefix('INFO');
// console.log(info('Server started')); // [INFO] Server started

// 9
// function fetchUser(id) {
//   return new Promise(res => setTimeout(() => res({ id, name: 'Masha' }), 100));
// }
//
// function makeLogger(prefix) {
//   return (data) => console.log(prefix, data);
// }
//
// fetchUser(7).then(makeLogger('User loaded:')); // замкнули prefix
// console.log('After fetch');

// 10
// Плохой сюрприз с var:
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log('var i =', i), 0);
// }
// выведет: 3, 3, 3 (все замыкания видят ОДНУ переменную i, изменённую до 3)

// 11
// Правильно с let:
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log('let j =', j), 0);
// }
// выведет: 0, 1, 2 (каждому шагу — своя j)

// ! - Отдельно обсудить
// 12
// for (var i = 0; i < 3; i++) {
//   (function (k) {
//     setTimeout(() => console.log('fixed i =', k), 0);
//   })(i);
// }

// 12_1
// for (var i = 0; i < 3; i++) {
//   const k = i;
//   setTimeout(() => console.log('fixed i =', k), 0);
// }

// 12_2
// for (const i of [0,1,2]) {
//   setTimeout(() => console.log(i), 0);
// }

// 13
// function make() {
//   const state = { x: 1 };
//   return () => console.log(state.x);
// }
// const f = make();
// f(); // 1
// где-то позже
// state всё ещё тот же объект (если на него есть ссылка внутри f)

// 14
// function someMethod() {
//   const self = this; // замкнули ссылку на контекст
//   setTimeout(function () {
//     console.log(self.title);
//   }, 0);
// }
// someMethod.call({ title: 'Hello' });

// 15
// function someMethod() {
//   setTimeout(() => {
//     console.log(this.title); // стрелка замкнула внешний this
//   }, 0);
// }
// someMethod.call({ title: 'Hello' });

// 16
// Задача 1. Что выведется и почему?
// function createList() {
//   const items = [];
//   return {
//     add(x) { items.push(x); },
//     print() { console.log(items.join(',')); }
//   };
// }
//
// const list = createList();
// list.add(1);
// list.add(2);
// const p = list.print;
// p(); // ?

// 17
// Задача 2. Исправь вывод 0,1,2,3 с задержкой 100*i мс (не меняя setTimeout-стрелку).
// for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 100 * i);
// }

// 18
// Задача 3. Реализуй once(fn):
// once(fn) возвращает функцию, которая вызывает fn только один раз.
// Последующие вызовы возвращают первый результат.
// const once = (fn) => { /* ... */ };
// function once(fn) {
//   let called = false;
//   let result;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       result = fn.apply(this, args);
//     }
//     return result;
//   };
// }
// let calls = 0;
// const init = once(() => { calls++; return 'ready'; });
//
// console.log(init()); // 'ready'
// console.log(init()); // 'ready' (fn больше не вызывается)
// console.log(calls);  // 1

// 18
// Эквивалентные записи
// Promise.resolve().then(() => {
//   console.log('Microtask as Promise');
// });
//
// queueMicrotask(() => {
//   console.log('Microtask');
// });

// 19
// 'use strict';
//
// function test() {
//   console.log(this); // undefined (в обычном режиме: window)
// }
// test();
//
// // В методах объектов поведение не меняется:
// const obj = {
//   method() {
//     console.log(this); // obj
//   }
// };

// 20
// async function hello() {
//   console.log('Внутри hello')
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   // await Promise.resolve();
//   return "Hello";
// }

// Эквивалентно:
// function hello() {
//   console.log('Внутри hello')
//   return Promise.resolve("Hello");
// }

// Использование:
// const result = await hello();
// console.log(result);
// hello().then(alert); // "Hello"

// 21
// Напишите функцию flattenDeep(array), которая рекурсивно выравнивает массив любой глубины вложенности.
// Функция должна возвращать новый массив без вложенных массивов.
// flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

// flattenDeep([1, [2, 3], [[4], 5]]);
// => [1, 2, 3, 4, 5]

// flattenDeep([1, {a: 2}, [3, [4]]]);
// => [1, {a: 2}, 3, 4] (объекты не раскрывать!)

// Решение - через рекурсию
// function flattenDeep(array) {
//   const result = [];
//
//   for (const item of array) {
//     if (Array.isArray(item)) {
//       // Рекурсивно выравниваем вложенный массив
//       result.push(...flattenDeep(item));
//     } else {
//       // Просто добавляем элемент
//       result.push(item);
//     }
//   }
//
//   return result;
// }

// Решение через циклы
// function flattenDeep(array) {
//   const result = [];
//   //  1
//   // const stack = [];
//   // for(const item of array) {
//   //   stack.push(item);
//   // }
//
//   // OR 2
//   // const stack = [];
//   // stack.push(...array);
//
//   // OR 3
//   const stack = [...array];
//
//   while(stack.length > 0) {
//     const current = stack.pop();
//     if(Array.isArray(current)) {
//       stack.push(...current);
//     } else {
//       result.push(current);
//     }
//   }
//   return result.reverse();
// }
// // Тесты
// console.log('Test 1:', JSON.stringify(flattenDeep([1, [2, [3, [4]], 5]])) === JSON.stringify([1, 2, 3, 4, 5]));
// console.log('Test 2:', JSON.stringify(flattenDeep([1, [2, 3], [[4], 5]])) === JSON.stringify([1, 2, 3, 4, 5]));
// console.log('Test 3:', JSON.stringify(flattenDeep([1, {a: 2}, [3, [4]]])) === JSON.stringify([1, {a: 2}, 3, 4]));
// console.log('Test 4:', JSON.stringify(flattenDeep([])) === JSON.stringify([]));
// console.log('Test 5:', JSON.stringify(flattenDeep([[[[]]]])) === JSON.stringify([]));
// console.log('Test 6:', JSON.stringify(flattenDeep([1, {a: 2}, [3, [4, [5, [6,7,8]]]]])) === JSON.stringify([1, {a: 2}, 3, 4,5,6,7,8]));

// 22
// Сумма двух чисел
// function sum(a, b) {
//   return (a == null ? 0 : Number(a)) + (b == null ? 0 : Number(b));
// }
//
// console.log("Test 1:", sum(1, 2) === 3);
// console.log("Test 2:", sum("2", "3") === 5);
// console.log("Test 3:", sum(null, 3) === 3);
// console.log("Test 4:", sum(2, undefined) === 2);
// console.log("Test 5:", sum() === 0);

// 23
// Найти уникальные элементы в массиве
// Напишите функцию getUnique(arr), которая возвращает новый массив,
// содержащий только уникальные элементы из исходного массива.
//
// Требования:
//
// Порядок элементов должен сохраняться (первые вхождения остаются)
//
// Работать с любыми типами данных: числа, строки, объекты
//
// Не использовать Set (представьте, что его нет)
//
// Примеры
// getUnique([1, 2, 2, 3, 4, 4, 5])
// // → [1, 2, 3, 4, 5]
//
// getUnique(['a', 'b', 'a', 'c', 'b'])
// // → ['a', 'b', 'c']
//
// getUnique([1, '1', 2, '2'])
// // → [1, '1', 2, '2'] (разные типы!)
//
// getUnique([{a: 1}, {a: 1}, {a: 2}])
// // → [{a: 1}, {a: 1}, {a: 2}] (объекты разные!)

// 2, 1, 2, 3, 1, 4
// =>
// 2, 1, 3, 4

// Простое решение (для примитивов)
// function getUnique(arr) {
//   const result = [];
//   for(const item of arr) {
//     if(result.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// Универсальное решение (если нельзя использовать Set):
// function getUnique(arr) {
//   const result = [];
//   const seen = new Map(); // Для хранения хэшей объектов
//
//   for (const item of arr) {
//     if (isPrimitive(item)) {
//       // Для примитивов используем includes
//       if (!result.includes(item)) {
//         result.push(item);
//       }
//     } else {
//       // Для объектов создаем уникальный ключ
//       const key = createObjectKey(item);
//       if (!seen.has(key)) {
//         seen.set(key, true);
//         result.push(item);
//       }
//     }
//   }
//   return result;
// }
//
// function isPrimitive(value) {
//   return value === null ||
//     typeof value !== 'object' &&
//     typeof value !== 'function';
// }
//
// function createObjectKey(obj) {
//   // Берем ключи по порядку для устойчивости
//   const keys = Object.keys(obj).sort();
//   return keys.map(key => `${key}:${obj[key]}`).join('|');
// }
//
// const result = getUnique([1, 2, 2, 3, 4, '4', 4, 5, '4', {a: 1}, {a: 1}, {a: 2}, {a: 2}]);
// console.log(result);
//
// console.log("Test1: ", JSON.stringify(getUnique([1, 2, 2, 3])) === JSON.stringify([1, 2, 3]));
// console.log("Test2: ", JSON.stringify(getUnique([1, 2, 2,'2', '2', 3, {a: 1}, {b:2}, {a: 1}, {b: 2}])) === JSON.stringify([1, 2, '2', 3, {a: 1}, {b:2}]));

// 24
// Что выведется в консоль

// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   delayedGreet: function () {
//     setTimeout(function () {
//       console.log(`Delayed hello, ${this.name}!`);
//     }, 100);
//   },
// };
// obj.greet();
// obj.delayedGreet();

// Ответ:
//Alice
//undefined

// Починить
// 1 способ - Сохранить this в переменную
// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   delayedGreet: function () {
//     const self = this;
//     setTimeout(function () {
//       console.log(`Delayed hello, ${self.name}!`);
//     }, 100);
//   },
// };
// obj.greet();
// obj.delayedGreet();

// 2 способ - IIFE с передачей контекста
// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   delayedGreet: function () {
//     (function (self) {
//       setTimeout(function() {
//         console.log(`Delayed hello, ${self.name}!`);
//       }, 100);
//     })(this)
//   },
// };
//
// obj.greet();
// obj.delayedGreet();

//3 способ - стрелочная функция
// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   delayedGreet: function () {
//     setTimeout( () => {
//       console.log(`Delayed hello, ${this.name}!`);
//     }, 100);
//   },
// };
// obj.greet();
// obj.delayedGreet();

//4 способ через bind
// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   delayedGreet: function () {
//     setTimeout(function () {
//       console.log(`Delayed hello, ${this.name}!`);
//     }.bind(this), 100);
//   },
// };
// obj.greet();
// obj.delayedGreet();

//5 способ - пережать контекст как параметр
// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   delayedGreet: function () {
//     setTimeout(function (self) {
//       console.log(`Delayed hello, ${self.name}!`);
//     }, 100, this);
//   },
// };
// obj.greet();
// obj.delayedGreet();


// 'use strict'
// Function Declaration
// function declareFunc() {
//   console.log('Declaration this:', this);
// }
//
// // Function Expression
// const expressFunc = function() {
//   console.log('Expression this:', this);
// };
//
// // Вызов в глобальной области
// declareFunc(); // this = window/global (или undefined в strict mode)
// expressFunc(); // this = window/global (или undefined в strict mode)

const obj = {
  name: 'Alice',

  // Обычная функция
  regularFunc: function() {
    console.log('Regular:', this?.name);
  },

  // Стрелочная функция
  arrowFunc: () => {
    console.log('Arrow:', this?.name);
  }
};

obj.regularFunc();
obj.arrowFunc();