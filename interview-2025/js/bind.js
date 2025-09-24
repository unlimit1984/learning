// 1 - привязка контекста this
// const person = {
//   name: "Alice",
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };
// person.sayHi();
// const badGreet = person.sayHi;
// badGreet();
// const fixedBadBadGreat = badGreet.bind(person);
// fixedBadBadGreat();

// 2 - Частичное применение (часть аргументов фиксируется)
// function multiply(a, b) {
//   return a * b;
// }
// const double = multiply.bind(null, 2); // this не нужен (null), первый аргумент a = 2 зашит
// console.log(double(5)); // 10

// 3 - возвращает новую функцию
// const obj = {
//   name: "Max",
//   method() {},
// };
// const f1 = obj.method.bind(obj);
// const f2 = obj.method.bind(obj);
// console.log(f1 === f2); // false

// 4 - new + bind
// function User(name) {
//   this.name = name;
// }
// const Bound = User.bind({ notUsed: true });
// const u = new Bound("Bob");
// console.log(u.name); // 'Bob'
// console.log(u.notUsed); // undefined
// const u2 = new Bound("Alice");
// console.log(u2.name); // 'Alice'

// ЗАДАЧИ

// 5 - Сумматор
// Напишите функцию sum, которая работает так: sum(a)(b) = a + b.
// function sum(a) {
//   return function(b) {
//     return a + b;
//   };
// }

//РЕШЕНИЕ
// function sum(a) {
//   return function(a, b) {
//     return a + b;
//   }.bind(null, a);
// }
// console.log(sum(5)(-1)); // 4
// Первый вызов запоминает a = 5, второй вызов принимает b = -1 и возвращает сумму.

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr2.filter((value) => value % 2 === 0));
// function filterFunc() {
//   return function(value) {
//     return value % 2 === 0;
//   }
// }
// console.log(arr2.filter(filterFunc()));

// 6 - Фильтрация по массиву
// Напишите функцию inBetween(a, b), которая возвращает фильтр для массива, ищущий элементы между a и b.
// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6))); // [3, 4, 5, 6]
// Функция inBetween возвращает функцию, которая "запомнила" a=3 и b=6.
// Эту функцию использует метод filter для каждого элемента массива.
//РЕШЕНИЕ
// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6))); // [3, 4, 5, 6]

// 7 Задача 2a: Фильтрация по принадлежности к массиву
// Напишите функцию inArray([...values]), которая возвращает фильтр,
// ищущий элементы, которые есть в переданном массиве значений.
// function inArray(arr) {
//   return function(x) {
//     // нужно проверить, есть ли x в arr
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inArray([1, 2, 10]))); // [1, 2]
//РЕШЕНИЕ
// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inArray([1, 2, 10]))); // [1, 2]

// 8 - Счетчик с шагом
// Создайте функцию createStepCounter(step), которая возвращает счетчик,
// увеличивающийся не на 1, а на переданный шаг.
// function createStepCounter(step) {
//   let count = 0;
//   return function() {
//     count += step; // Используем step из внешней функции
//     return count;
//   };
// }
// const tripleCounter = createStepCounter(3);
// console.log(tripleCounter()); // 3
// console.log(tripleCounter()); // 6
// console.log(tripleCounter()); // 9

// 9 - Реализовать функцию sum,
// Каждый вызов функции sum возвращает функцию, которая может принимать следующий аргумент,
// а пустой вызов () возвращает итоговую сумму.
// sum(1)(2)(); // 3
// sum(1)(2)(3)(); // 6
// sum(5)(-1)(7)(); // 11
//РЕШЕНИЕ
// function sum(a) {
//   let acc = a;
//   return function func(b) {
//     if (b === undefined) {
//       return acc;
//     }
//     acc += b;
//     return func;
//   };
// }
//
// console.log(sum(1)(2)()); // 3
// console.log(sum(1)(2)(3)()); // 6
// console.log(sum(5)(-1)(7)()); // 11

// 10 - Кэширующий декоратор
// Создай функцию cached, которая принимает функцию fn и возвращает новую функцию, которая:
// Кэширует результаты вызовов
// При повторных вызовах с теми же аргументами возвращает результат из кэша
// Кэш должен храниться в замыкании
// function slow(x) {
//   // медленные вычисления
//   return x * 2;
// }
// const cachedSlow = cached(slow);
// cachedSlow(5); // вычисляет и возвращает 10
// cachedSlow(5); // сразу возвращает 10 из кэша

// function slow(x) {
//   console.log("Calculating", new Date().toISOString());
//   return x * 2;
// }
// function cached(fn) {
//   let resultMap = new Map();
//   return function resultFunc(key) {
//     if (resultMap.has(key)) {
//       return resultMap.get(key);
//     }
//     resultMap.set(key, fn(key));
//     return resultMap.get(key);
//   };
// }
// const cachedSlow = cached(slow);
// console.log(cachedSlow(5)); // вычисляет и возвращает 10
// console.log(cachedSlow(5)); // сразу возвращает 10 из кэша
// console.log(cachedSlow(6)); // вычисляет и возвращает 12
// console.log(cachedSlow(6)); // сразу возвращает 12 из кэша
// console.log(cachedSlow(5)); // сразу возвращает 10 из кэша
//улучшенная версия
// function cached2(fn) {
//   let resultMap = new Map();
//   return function resultFunc(...args) {
//     const key = JSON.stringify(args);
//     if (resultMap.has(key)) {
//       return resultMap.get(key);
//     }
//     const result = fn(...args);
//     resultMap.set(key, result);
//     return result;
//   };
// }
// const cachedSlow2 = cached2(slow);
// console.log(cachedSlow2(5)); // вычисляет и возвращает 10
// console.log(cachedSlow2(5)); // сразу возвращает 10 из кэша
// console.log(cachedSlow2(6)); // вычисляет и возвращает 12
// console.log(cachedSlow2(6)); // сразу возвращает 12 из кэша
// console.log(cachedSlow2(5)); // сразу возвращает 10 из кэша
// function multiplyArgs(...args) {
//   console.log("Calculating", new Date().toISOString());
//   let result = 1;
//   for (let i = 0; i < args.length; i++) {
//     result *= args[i];
//   }
//   return result;
// }
// console.log("check if multiplyArgs works:", multiplyArgs(2, 3, 4) === 24);
// const cachedMultiplyArgs = cached2(multiplyArgs);
// console.log(cachedMultiplyArgs(2,2,3));// 12
// console.log(cachedMultiplyArgs(2,2,3));// 12
// console.log(cachedMultiplyArgs(0,2,3));// 0
// console.log(cachedMultiplyArgs(10,2,4));// 800
// console.log(cachedMultiplyArgs(10,2,4));// 800

// 11 - Частичное применение
// Реализуй функцию partial, которая позволяет частично применять аргументы к функции
// function add(a, b, c) {
//   return a + b + c;
// }
// const add5 = partial(add, 5);
// console.log(add5(10, 15)); // 30 (5 + 10 + 15)
// const add5And10 = partial(add, 5, 10);
// console.log(add5And10(15)); // 30 (5 + 10 + 15)
// РЕШЕНИЕ
// function add(a, b, c) {
//   return a + b + c;
// }
// function partial(fn, ...fixedArgs) {
//   return function(...innerArgs) {
//     return fn(...fixedArgs, ...innerArgs);
//   };
// }
// const add1 = partial(add, 1);
// console.log(add1(2, 3)); // 6 (1 + 2 + 3)
// const add5And10 = partial(add, 5, 10);
// console.log(add5And10(2)); // 17 (5 + 10 + 2)

// 12 - Счетчик с ограничением
// Создай функцию createLimitedCounter(limit), которая возвращает объект с методами:
// increment() - увеличивает счетчик на 1, но не больше чем limit
// decrement() - уменьшает счетчик на 1, но не меньше чем 0
// getValue() - возвращает текущее значение
// Пример использования
// const counter = createLimitedCounter(3);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment(); // не должен превысить лимит
// console.log(counter.getValue()); // 3
//РЕШЕНИЕ
// function createLimitedCounter(limit) {
//   let counter = 0;
//   return {
//     // increment: function () {
//     increment:  () => {
//       if (counter < limit) {
//         counter++;
//       }
//     },
//     // decrement: function () {
//     decrement:  () => {
//       if (counter > 0) {
//         counter--;
//       }
//     },
//     // getValue: function () {
//     getValue:  () => {
//       return counter;
//     },
//   };
// }
// const counter = createLimitedCounter(3);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment(); // не должен превысить лимит
// console.log(counter.getValue()); // 3
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement(); // 0
// console.log(counter.getValue()); // 0

// 13 - Генератор последовательностей
// Создай функцию sequence(start, step), которая при вызове возвращает функцию-генератор.
// При каждом вызове генератор возвращает следующее число в арифметической прогрессии:
// start - начальное значение
// step - шаг progression
// const generator = sequence(10, 3);
// console.log(generator()); // 10
// console.log(generator()); // 13
// console.log(generator()); // 16
//РЕШЕНИЕ
// function sequence(start, step) {
//   let current = start;
//   return function () {
//     const old = current;
//     current += step;
//     return old;
//   };
// }
// const generator = sequence(10, 3);
// console.log(generator()); // 10
// console.log(generator()); // 13
// console.log(generator()); // 16

// 14 - Реализовать функцию автокaррирования curry
// (Grid Dynamics собес)
// const taskChain = (task1, task2, task3) => {
//   console.log(task1, task2, task3);
// };
// const curriedTaskChain = curry(taskChain);
// curriedTaskChain()()()(1, 2, 3);
// curriedTaskChain()(1)()(2)(3);
// curriedTaskChain(1, 2, 3);
// curriedTaskChain(1)()(2, 3);
// curriedTaskChain(1, 2)()(3, 4);
//РЕШЕНИЕ
// const taskChain = (task1, task2, task3) => {
//   console.log(task1, task2, task3);
// };
// function curry(fn) {
//   return function curries(...args) {
//     if(args.length >=fn.length) {
//       fn(...args);
//     } else {
//       return curries.bind(null, ...args);
//     }
//   };
// }
// const curriedTaskChain = curry(taskChain);
// curriedTaskChain()()()(1, 2, 3);
// curriedTaskChain()(1)()(2)(3);
// curriedTaskChain(1, 2, 3);
// curriedTaskChain(1)()(2, 3);
// curriedTaskChain(1, 2)()(3, 4);
