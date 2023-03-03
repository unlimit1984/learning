// 12 Base Types

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

// 13 Interfaces and Types

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
console.log(c2({x: 1, y:2}));

//Cast to specific type/interface
const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;
