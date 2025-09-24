// 1 - Базовый пример
// function greet(arg1, arg2) {
//   console.log(`Я - ${this.name}, ${arg1}, сегодня ${arg2} `);
// }
// const person = { name: "Anna" };
// greet.apply(person, ["Привет", new Date().toDateString()]);

// 2 - Передача массива в функцию, ожидающую отдельные аргументы
// console.log(Math.max(1, 2, 3)); // 3
// console.log(Math.max([1, 2, 3])); // NaN (не работает!)
// const numbers = [1, 2, 3];
// console.log(Math.max.apply(null, numbers)); // 3 (работает!)
// console.log(Math.max.apply(null, [1, 2, 3])); // 3 (работает!)
// Современная альтернатива
// console.log(Math.max(...[1, 2, 3]));

// 3 - Вызов родительского конструктора
// function Parent(name) {
//   this.name = name;
// }
// function Child(name, age) {
//   Parent.apply(this, [name]); // вызов родительского конструктора
//   this.age = age;
// }
// const child = new Child("Alex", 28);
// console.log(child);

// 4 - Работа с функциями, принимающими переменное число аргументов
// function logArguments() {
//   console.log('Аргументы:', Array.from(arguments));
// }
// const args = ['a', 'b', 'c'];
// logArguments.apply(null, args); // Аргументы: ['a', 'b', 'c']

// 5 - Напиши функцию concatStrings, которая принимает любое количество строковых аргументов и
// возвращает их конкатенацию. Используй apply для вызова этой функции с массивом строк.
// РЕШЕНИЕ
// function concatStrings(...args) {
//   let result = "";
//   for (let arg of args) {
//     result += arg;
//   }
//   return result;
// }
// console.log(concatStrings.apply(null, ["abc", "def", "ghi"]));

// 6 - Напиши функцию callWithContext, которая принимает функцию, контекст и массив аргументов,
// и вызывает функцию с этим контекстом и аргументами, используя apply.
//РЕШЕНИЕ (не сделал)
function callWithContext(fn, context, argsArr) {
  return fn.apply(context, argsArr);
}
function introduce(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const person = { name: "Alice" };
const result = callWithContext(introduce, person, ["Hello", "!"]);
console.log(result); // "Hello, Alice!"
