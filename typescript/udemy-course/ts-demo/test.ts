//12 - Base Types

// const a: number  = 5;

let a: number = 4;
let b = "dadsad";
let c = true;

let d: string[] = ["sdf", "fdfd", "dsds"];

let e: any = 3;
e = "dsds";

function test(a: string): number | string {
  return "";
}

const test2 = (a: number): number => {
  return a * 2;
};

d = d.map((x: string) => x.toLowerCase());

// function countCoord (coord: {lat: number, long: number | undefined}) { // the same as below
function countCoord (coord: {lat: number, long?: number}) {
    return;
}

function printIt(id: number | string) {
    if(typeof id === 'number') {
        console.log(id.toString());
    } else if(typeof id === 'string'){
        id.toLowerCase();
    }
}

function getSum (a: number | number[]) {
    if(Array.isArray(a)){

    }
}

function noVoidFunc(): void {
    return;
}

const x: undefined = undefined;
const z: null = null;

//13 - Interfaces and Types

type Point = {
    x: number,
    y: number
};

type D3Point = Point & {
    z: number;
}

interface IPoint {
    x: number,
    y: number
}
interface I3DPoint extends IPoint {
    z: number;
}

type stringOrNumber = string | number;


function print(coord: Point){

}

function print2(coord: IPoint){

}

interface ITest {
    a: number;
}

interface ITest {
    b: number;
}

const aaa: ITest = {
    a: 1,
    b: 2
}

type Test = {
    a: number;
}

//is not possible
// type Test = {
//     b: number;
// }

const c2 = (point: IPoint)=> {
    const d:I3DPoint = point as I3DPoint; //cast to specific type/interface
    return d;
}
// console.log(c2({x: 1, y:2}));

//Cast to specific type/interface
// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

//14 - Exercise - Interfaces

interface Info {
    desc: string;
    isActive: boolean;
}

interface Tag {
    name: string;
    value: number;
}

interface Reply {
    userId: number;
    id: number;
    title: string;
    info: Info;
    tags: Tag[];
}

//15 - Literal types

let c3: 'test' = 'test'; //literak type definition

type actionType = 'up' |  'down'; //literal type

function performAction(action: actionType): -1 | 1 {
    switch (action) {
        case 'up':
            return 1;
        case 'down':
            return -1;
    }
}

interface ComplexAction {
    s: string;
}

function performAction2(action: actionType | ComplexAction) {
    switch (action) {
        case 'up':
            return 1;
        case 'down':
            return -1;
    }
}

//16 - Classes

//for "strictPropertyInitialization": true,
// class PointC {
//     x!: number;
//     y!: number;
// }

class PointC {
    readonly x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    protected a() {

    }
}

const point = new PointC(0,0);

// console.log(point); // 0

class D3PointC extends PointC {

    z: number;

    constructor(x: number, y: number, z: number) {
        super(x,y);
        this.z = z;
        this.a();
    }

    a(name?: string) {

    }

}

const point2 = new D3PointC(1,1,1);

class StaticTest {
    static c = 'sdf';
    static test(){

    }
}
const statoicD = StaticTest.c;
StaticTest.test();

abstract class Test3 {
    myMethod() {}
}

class Test4 extends Test3 {

}
new Test4()


interface C {
    test: () => void;
    test2: () => number;
}

class D implements C {
    test(): void {

    }

    test2(): number {
        return 3;
    }
}

//17 - Enums

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

enum Decision {
    Yes = 1,
    // No = 'No',
    No2 = calcEnum()
}

function calcEnum() { //Рассчитываемые  enum-ы только числовые
    return 2;
}

function runEnum(obj: { Up: string }) {

}

runEnum(Direction)

//Обратный mapping => получить строковое значение какого-то из enum-ов

enum TestEnum {
    A
}

let test1 = TestEnum.A
// console.log(test1);

let nameA = TestEnum[test1];
// console.log(nameA);

//Константные enum-ы
const enum ConstEnum {
    A,
    B
}
let c4 = ConstEnum.A;
// console.log(c4);

enum Dice {
    One = 1,
    Two,
    Three
}

/*
function ruDice(dice: Dice) {
    switch (dice){
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        // case Dice.Three:
        //     return 'три';
        default:
            const a: never = dice;
    }
}
*/

//18 - Generics

// function logTime(num: number): number {
//     console.log(new Date());
//     return num;
// }
// function logTime2(num: string): string {
//     console.log(new Date());
//     return num;
// }

function logTime<T>(num: T): T {
    console.log(new Date());
    return num;
}
logTime<string>('asd');
logTime<number>(123);

function logTime2<T>(num: T): T {
    console.log(new Date());
    if(typeof num == 'string'){
        num.toLocaleUpperCase();
    }
    return num;
}

// interface MyInterface {
//     transform: (a: number) => number
// }

// interface MyInterface {
//     transform: <T>(a: T) => T
// }

interface MyInterface {
    transform: <T, F>(a: T) => F
}

class MyGenClass<T> {
    value: T
}
const my = new MyGenClass<number>();

interface TimeStamp {
    stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num;
}

//19 - Manipulations with types (keyof)

type Point1 = { x: number, y: number };
type P = keyof Point1
let pp: P;
// pp = 'z';
pp = 'x';

function MyF() {
    return { a: 1 };
}
type K = ReturnType<typeof MyF>

type MyFType = () => { a: number }
type K2 = ReturnType<MyFType>

const MyArray = [
    { name: 'Vasia', age: 30}
];

type Person = typeof MyArray[number];
type Age = typeof MyArray[number]['age'];

type MessageOf<T> = T extends { message: unknown} ? T['message'] : never
interface Email {
    message: string;
}
interface Cat {
    test: number;
}

type EmailMessageContents = MessageOf<Email>
type CatMessageContents = MessageOf<Cat>

const email: EmailMessageContents = 'my@mail.com';
// const cat1: CatMessageContents = '1234';
// const cat2: CatMessageContents = 1234;


interface Test2 {
    [key: string]: number;
}
const test22: Test2 = {
    some1: 1,
    some2: 2,
    123: 22
}


type OptionFlags<Type> = {
    [Property in keyof Type]: boolean
}
interface IPerson {
    name: string;
    age: number;
}
type MyPersonType = OptionFlags<IPerson>;
//Additional for reading: https://blog.logrocket.com/how-to-use-keyof-operator-typescript


type world = 'world';
type Greeting = `hello ${world}`;
