// 6 primitive types
console.log("=============");
let undefinedVar;
console.log(typeof undefinedVar, undefinedVar);

let booleanVar = true;
console.log(typeof booleanVar, booleanVar);

let numberVar = 1234444545454545454545454;
console.log(typeof numberVar, numberVar);

let stringVar = "abc";
console.log(typeof stringVar, stringVar);

let symbolVar = Symbol("abc");
console.log(typeof symbolVar, symbolVar);

// let bigIntVar = 19241924124n; //bigIntVar2 = BigInt(19241924124);
let bigIntVar2 = BigInt(19241924124);
console.log(typeof bigIntVar2, bigIntVar2);

console.log("=============");
//Object
const obj = { a: 1, b: 2 };
console.log("typeof obj", typeof obj);

//Null
let nullVar = null;
console.log(typeof nullVar);

// let mapVar = new Map([
//   ['a', 1],
//   ['b', 2]]
// );
let mapVar = new Map();
mapVar.set("a", 1).set("b", 2);
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
console.log(typeof pidgey); // number

pidgey = "bird";
console.log(typeof pidgey); // string

pidgey = false;
console.log(typeof pidgey); // boolean

pidgey = null;
console.log(typeof pidgey); // object

pidgey = undefined;
console.log(typeof pidgey); // undefined

let arr2: Array<number> = [1, 2, 3];
console.log(typeof arr2, arr2);

//JUST TS Types
//any, unknown, never, tuple, enum, union, intersection, type alias, interface

console.log("======== Types VS Interfaces =========");
type OrderNumber = string;
const myOrderNumber: OrderNumber = "31337";
// console.log(typeof myOrderNumber, instanceof myOrderNumber, myOrderNumber);

let hmm: number | string = 123;
hmm = "abs";

interface I1 {
  name: string;
}
interface I2 {
  age: number;
}
type I3 = I1 | I2;
const my: I3 = {
  name: "aaa",
};

type T1 = { surname: string; middlename: string };
type T2 = { name: string; age?: number };
type T3 = T1 | T2;
const t3: T3 = {
  name: "aaa",
};
type T4 = T1 & T2;
const t4: T4 = {
  surname: "Cameron",
  middlename: "Middle",
  name: "James",
};

type User = { name: string; age: number };
type Admin = User & { permissions: string[] };
const admin: Admin = {
  name: "John",
  age: 30,
  permissions: ["editor", "creator"],
};

let tuple: [Admin, number] = [
  { name: "John", age: 30, permissions: ["editor", "creator"] },
  123,
];
console.log(tuple);
let tuple2: [number, number] = [123, 456];
console.log(tuple2);

type UserKeys = keyof User;
// Результат: "name" | "age"
const field1: UserKeys = "name";
//одинаковое название - type имеет преимущество
interface SameType {
  age: number;
}
type SameName = {
  name: string;
}
const sameType: SameName = {
  name: "John",
}

console.log("===== Как сделать поле readonly в interface/type/class =====");
interface User2 {
  readonly id: number; // Только для чтения
  name: string; // Обычное поле
  readonly createdAt: Date; // Только для чтения
  address: {
    city: string;
    street: string;
  }
}
const user: User2 = {
  id: 1,
  name: "John",
  createdAt: new Date(),
  address: {
    city: 'Moscow',
    street: 'Tverskaya',
  }
};

user.name = "Alice"; // ✅ Можно изменить
// user.id = 2;             // ❌ Error: Cannot assign to 'id' because it is a read-only property
// user.createdAt = new Date(); // ❌ Error

const user2: Readonly<User2> = {
  id: 1,
  name: "John",
  createdAt: new Date(),
  address: {
    city: "Moscow",
    street: "Tverskaya",
  },

};
// user2.name = 'Alice'; // ❌ Все поля только для чтения!
// user2.id = 2;         // ❌ Error
// user2.createdAt = new Date(); // ❌ Error
user2.address.city = "Klin";
console.log('Readonly<User2>',user2);


type Product = {
  readonly id: string;
  name: string;
  readonly sku: string;
};
const product: Product = {
  id: "prod-1",
  name: "Laptop",
  sku: "LP123",
};
product.name = "Desktop"; // ✅ OK
// product.sku = 'NEW123';   // ❌ Error

const user3 = Object.freeze({
  id: 1,
  name: "John",
  address: {
    city: "Moscow",
    street: "Tverskaya",
  },
});
// user3.name = 'Alice';     // ❌ Не изменится (в strict mode - ошибка)
// user3.id = 2;             // ❌ Не изменится
// Но! Object.freeze() поверхностный
user3.address.city = "SPb"; // ✅ Изменится! (вложенные объекты не защищены)
console.log("user3.address.city", user3.address.city); // 'SPb'

const user4 = {
  id: 1,
  name: "John",
  address: {
    city: "Moscow",
    street: "Tverskaya",
  },
};
function deepFreeze<T>(obj: T): T {
  Object.freeze(obj);
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}
const frozenUser = deepFreeze(user4);
frozenUser.address.city = "Kazan"; // ❌ Теперь ошибка и здесь
console.log("frozenUser.address.city", frozenUser.address.city);
// в классах
class User5 {
  readonly id: number; // readonly поле
  name: string;

  constructor(id: number, name: string) {
    this.id = id; // ✅ Можно установить в конструкторе
    this.name = name;
  }

  changeId(newId: number) {
    // this.id = newId;      // ❌ Error: Cannot assign to 'id'
  }
}
const user5 = new User5(1, "John");
user5.name = "Alice"; // ✅ OK
// user5.id = 2;              // ❌ Error

//в конструкторе
class User6 {
  constructor(
    public readonly id: number, // Автоматически становится readonly полем
    public name: string,
  ) {}
}
const user6 = new User6(1, "John");
// user6.id = 2; // ❌ Error

//в массивах
const numbers: ReadonlyArray<number> = [1, 2, 3];
// Или сокращенная запись:
const names: readonly string[] = ["John", "Alice"];
// numbers.push(4);    // ❌ Error: Property 'push' does not exist
// numbers[0] = 100;   // ❌ Error: Index signature in type 'readonly number[]' only permits reading
// names.pop();        // ❌ Error
// Но можно создавать новые массивы на основе старого
const newNumbers = [...numbers, 4]; // ✅ OK
const filtered = numbers.filter((n) => n > 1); // ✅ OK

const user7 = {
  name: "John",
  age: 30,
  address: {
    city: "Moscow",
    street: "Tverskaya",
  },
};
Object.freeze(user7);
user7.name = "Alice";
console.log("frozen user7", user7);
//Object.defineProperty()
const user8 = {};
Object.defineProperty(user8, "id", {
  value: 1,
  writable: false, // Нельзя изменять значение
  enumerable: true, // Будет видно в for-in
  configurable: false, // Нельзя удалить и переопределить
});
// user8.id = 2; // ❌ Не сработает (в strict mode - TypeError)
// console.log(user8.id); // 1
// Проверка
console.log(Object.getOwnPropertyDescriptor(user, "id"));
// { value: 1, writable: false, enumerable: true, configurable: false }

interface Config {
  readonly apiUrl: string;
  readonly version: string;
}
const config: Config = Object.freeze({
  apiUrl: "https://api.example.com",
  version: "1.0.0",
});

console.log("===== Как сделать поле обязательным в интерфейсе =====");
console.log('==== Partial, Omit, Pick, Required ====');
//Partial<Type>
interface User11 {
  id: number;
  name: string;
  email: string;
  age: number;
}
// Все поля становятся необязательными
type PartialUser = Partial<User11>;
/*
Эквивалентно:
{
  id?: number;
  name?: string;
  email?: string;
  age?: number;
}
*/
// Использование: данные для обновления пользователя
function updateUser(id: number, updates: Partial<User11>) {
  // Можно передать любое подмножество свойств User
}
updateUser(1, { name: "John" }); // OK
updateUser(2, { age: 30 }); // OK
updateUser(3, {}); // OK - пустой объект тоже допустим
//Required<Type>
interface User22 {
  id?: number;
  name?: string;
  email?: string;
}
// Все поля становятся обязательными
type RequiredUser = Required<User22>;
/*
Эквивалентно:
{
  id: number;
  name: string;
  email: string;
}
*/

// Использование: когда нужны все данные
function createUser(user: RequiredUser) {
  // Здесь все поля гарантированно присутствуют
}
createUser({ id: 1, name: "John", email: "john@example.com" }); // OK
// createUser({ name: "John" }); // Ошибка: отсутствуют id и email
//Pick<Type, Keys>
interface User33 {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}
// Выбираем только определенные свойства
type UserPreview = Pick<User33, 'id' | 'name' | 'email'>;
/*
Эквивалентно:
{
  id: number;
  name: string;
  email: string;
}
*/
// Использование: для API ответа с сокращенными данными
function getUserPreview(): UserPreview {
  return {
    id: 1,
    name: "John",
    email: "john@example.com"
  };
}
//Omit<Type, Keys>
interface User44 {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string; // Секретное поле
}

// Исключаем конфиденциальные данные
type PublicUser = Omit<User44, 'password' | 'email'>;
/*
Эквивалентно:
{
  id: number;
  name: string;
  age: number;
}
*/
// Исключаем несколько полей
type UserWithoutIds = Omit<User44, 'id' | 'password'>;
/*
Эквивалентно:
{
  name: string;
  email: string;
  age: number;
}
*/
// Использование: для публичного API
function getPublicUserData(): PublicUser {
  return {
    id: 1,
    name: "John",
    age: 30
  };
}
//Обновление с валидацией
interface Product1 {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}
// Для обновления продукта: все поля необязательные, кроме id
type UpdateProductDto = Partial<Omit<Product1, 'id'>> & { id: number };
function updateProduct(data: UpdateProductDto) {
  // data обязательно содержит id, остальные поля опциональны
}

console.log("===== keyof =====");
//Безопасный доступ к свойствам
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user9: User = { name: "John", age: 30 };
// ✅ Автодополнение и проверка
getProperty(user9, "name"); // string
console.log('getProperty(user9, "name")', getProperty(user9, "name"));
// ❌ Ошибка компиляции
// getProperty(user, "invalid"); // Argument of type '"invalid"' is not assignable to parameter of type 'keyof User'

const obj3 = {
  name: "John",
  age: 30,
  address: {
    city: "Moscow",
    street: "Tverskaya",
  },
};
console.log("Object.keys(obj3)", Object.keys(obj3));
console.log("getProperty(obj3, 'address')", getProperty(obj3, "address"));
// Валидация форм
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
function validateField<T extends keyof FormValues>(
  field: T,
  value: FormValues[T],
): boolean {
  if (field === "email") {
    return typeof value === "string" && value.includes("@");
  }
  if (field === "age") {
    return typeof value === "number" && value > 0;
  }
  return true;
}
// ✅ Автодополнение работает
validateField("email", "test@example.com");
validateField("age", 25);
// ❌ Ошибка компиляции
// validateField("invalid", "value");
//keyof typeof для объектов
const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};
type ColorKeys = keyof typeof colors; // "red" | "green" | "blue"
function getColor(key: ColorKeys): string {
  return colors[key];
}
getColor("red"); // ✅ OK
// getColor("yellow"); // ❌ Error

const config2 = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retry: true
};
type ConfigKeys = keyof typeof config2;
// "apiUrl" | "timeout" | "retry"
function getConfigValue(key: ConfigKeys) {
  return config2[key];
}
getConfigValue("apiUrl");    // ✅ OK
// getConfigValue("invalid");   // ❌ Error
