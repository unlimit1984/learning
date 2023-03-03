"use strict";
//12 - Base Types
// const a: number  = 5;
let a = 4;
let b = "dadsad";
let c = true;
let d = ["sdf", "fdfd", "dsds"];
let e = 3;
e = "dsds";
function test(a) {
    return "";
}
const test2 = (a) => {
    return a * 2;
};
d = d.map((x) => x.toLowerCase());
// function countCoord (coord: {lat: number, long: number | undefined}) { // the same as below
function countCoord(coord) {
    return;
}
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        id.toLowerCase();
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
    }
}
function noVoidFunc() {
    return;
}
const x = undefined;
const z = null;
function print(coord) {
}
function print2(coord) {
}
const aaa = {
    a: 1,
    b: 2
};
//is not possible
// type Test = {
//     b: number;
// }
const c2 = (point) => {
    const d = point; //cast to specific type/interface
    return d;
};
//15 - Literal types
let c3 = 'test'; //literak type definition
function performAction(action) {
    switch (action) {
        case 'up':
            return 1;
        case 'down':
            return -1;
    }
}
function performAction2(action) {
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
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    a() {
    }
}
const point = new PointC(0, 0);
// console.log(point); // 0
class D3PointC extends PointC {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
        this.a();
    }
    a(name) {
    }
}
const point2 = new D3PointC(1, 1, 1);
class StaticTest {
    static test() {
    }
}
StaticTest.c = 'sdf';
const statoicD = StaticTest.c;
StaticTest.test();
class Test3 {
    myMethod() { }
}
class Test4 extends Test3 {
}
new Test4();
class D {
    test() {
    }
    test2() {
        return 3;
    }
}
//17 - Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    // No = 'No',
    Decision[Decision["No2"] = calcEnum()] = "No2";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(Direction);
//Обратный mapping => получить строковое значение какого-то из enum-ов
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["A"] = 0] = "A";
})(TestEnum || (TestEnum = {}));
let test1 = TestEnum.A;
// console.log(test1);
let nameA = TestEnum[test1];
let c4 = 0 /* ConstEnum.A */;
// console.log(c4);
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));
function ruDice(dice) {
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        // case Dice.Three:
        //     return 'три';
        default:
            const a = dice;
    }
}
