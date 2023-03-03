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

//function countCoord = (coord: {lat: number, long: number | undefined}) { // the same as below
function countCoord = (coord: {lat: number, long?: number}) {
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

