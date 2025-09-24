// 1 - Базовый пример
// function greet(arg1, arg2) {
//   console.log(`Я - ${this.name}, ${arg1}, сегодня ${arg2} `);
// }
// const person = { name: "Alex" };
// greet.call(person, "Привет", new Date().toDateString());

// 2 - Cоздайте функцию describe, которая принимает два параметра: hobby и age.
// Функция должна выводить: "Меня зовут [name], мне [age] лет, я люблю [hobby]".
// Используйте call, чтобы вызвать describe с контекстом объекта user и аргументами 'рисование' и 28.
// РЕШЕНИЕ (сам)
// function describe(hobby, age) {
//   console.log(`Меня зовут ${this.name}, мне ${age} лет, я люблю ${hobby}`);
// }
// describe.call({ name: "Alex" }, "рисование", 28);

// 3 - Заимствование методов Создайте объект calculator с методами add и subtract,
// которые работают со свойством value.
// Используйте call, чтобы применить эти методы к другому объекту otherCalculator с свойством value: 10.
// РЕШЕНИЕ (сам)
// const calculator = {
//   add: function (value) {
//     this.value += value;
//   },
//   subtract: function (value) {
//     this.value -= value;
//   },
// };
// const otherCalculator = {
//   value: 10,
// };
// calculator.add.call(otherCalculator, 1);
// console.log(otherCalculator);
// calculator.subtract.call(otherCalculator, 5);
// console.log(otherCalculator);

// 4 - Цепочка вызовов
// Создайте два объекта: objA с свойством a: 5 и objB с свойством b: 3.
// Напишите функцию multiply, которая возвращает произведение this.a и this.b.
// Используйте call сначала с objA, потом с objB. Объясните результат.
// РЕШЕНИЕ (сам)
// const objA = { a: 5 };
// const objB = { b: 3 };
// function multiply() {
//   const arg1 = this.a;
//   return function () {
//     return arg1 * this.b;
//   };
// }
// console.log(multiply.call(objA).call(objB));

// 5 - Call с конструкторами
// Создайте функцию-конструктор Car, которая принимает model и year и сохраняет их в this.
// Используйте call внутри другой функции-конструктора ElectricCar,
// чтобы наследовать свойства Car и добавить свойство batteryCapacity.
// РЕШЕНИЕ (не сделал)
// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// }
// function ElectricCar(model, year, batteryCapacity) {
//   // Наследуем свойства от Car с помощью call
//   Car.call(this, model, year);
//   this.batteryCapacity = batteryCapacity;
// }
// const electricCar = new ElectricCar('Tesla', 2025, 100);
// console.log(electricCar)

// 6 - Использование call с встроенными методами
// У вас есть массивоподобный объект nodeList = {0: 'div', 1: 'span', 2: 'p', length: 3}.
// Используйте call, чтобы применить метод Array.prototype.forEach к этому объекту и вывести все элементы.
// const nodeList = { 0: "div", 1: "span", 2: "p", length: 3 };
// Array.prototype.forEach.call(nodeList, function (element, index) {
//   console.log(index + ": " + element);
// });

// 7 - Динамическое изменение контекста
// Создайте два объекта: french с методом greet() на французском и english с методом greet() на английском.
// Используйте call, чтобы вызвать метод french.greet с контекстом english и наоборот.
// const french = {
//   message: "Bonjour",
//   greet() {
//     // console.log("Bonjour");
//     console.log(this.message);
//   },
// };
// const english = {
//   message: "Hello",
//   greet: function () {
//     // console.log("Hello");
//     console.log(this.message);
//   },
// };
// french.greet.call(english);
// english.greet.call(french);
