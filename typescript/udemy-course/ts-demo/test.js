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
console.log(c2({ x: 1, y: 2 }));
//Cast to specific type/interface
const myCanvas = document.getElementById('canvas');
