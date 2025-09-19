// Верни последние k заявок из двух массивов со сквозным id
// const getDecision1 = [
//   { id: 1, result: 'approved' },
//   { id: 3, result: 'waiting' },
//   { id: 15, result: 'approved' },
//   { id: 20, result: 'approved' },
//   { id: 26, result: 'waiting' },
//   { id: 30, result: 'approved' }
// ];
// const getDecision2 = [
//   { id: 2, result: 'approved' },
//   { id: 4, result: 'waiting' },
//   { id: 14, result: 'approved' },
//   { id: 16, result: 'approved' },
//   { id: 23, result: 'waiting' },
//   { id: 32, result: 'approved' }
// ];
// const getLastDecision = (
//   decision1: { id: number; result: string }[],
//   decision2: { id: number; result: string }[],
//   k: number
// ) => {
//   let i = getDecision1.length - 1;
//   let j = getDecision2.length - 1;
//   const result = [];
//   while (k > 0) {
//     if (i === 0) {
//       result.push(getDecision2[j--]);
//     } else if (j === 0) {
//       result.push(getDecision1[i--]);
//     } else if (getDecision1[i].id > getDecision2[j].id) {
//       result.push(getDecision1[i--]);
//     } else {
//       result.push(getDecision2[j--]);
//     }
//     k--;
//   }
//   result.reverse();
//   return result;
// };
// const result = getLastDecision(getDecision1, getDecision2, 5);
// console.log(result);

// Дана коллекция чисел, необходимо реализовать функцию,
// которая находит в ней пару чисел, составляющих заданную сумму
//Надо решить за линейную сложность
// const hasPaiwWithSum = (arr, sum) => {
//   const candidates = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     const candidates = new Set();
//     for (let i = 0; i < arr.length; i++) {
//       if (candidates.has(sum - arr[i])) {
//         return true;
//       } else {
//         candidates.add(arr[i]);
//       }
//     }
//     return false;
//   }
// };
// console.log('hasPaiwWithSum([3, 4, 7, 10], 8)', hasPaiwWithSum([3, 4, 7, 10], 8)); // false
// console.log('hasPaiwWithSum([1, 4, 4, 9], 8)', hasPaiwWithSum([1, 4, 4, 9], 8)); // true
// console.log('hasPaiwWithSum([-8, 1, 4, 9, 16], 8)', hasPaiwWithSum([-8, 1, 4, 9, 16], 8)); // true

// Реализовать функцию автокaррирования curry
const taskChain = (task1, task2, task3) => {
  console.log( task1, task2, task3);
}
// const curry = (fn) => {
//   const tasks: number[] = [];
//   const innerFunc = (...args: number[]) => {
//     if(args.length > 0) {
//       tasks.push(...args);
//       return innerFunc;
//     }
//     if(tasks.length>=3) {
//       return fn(...tasks);
//     }
//   }
// };
const curry = (fn) => {
  return function curryClosure(...args) {
    if(args.length >=fn.length) {
      return fn.apply(this, args);
    } else {
      return curryClosure.bind(this, ...args);
    }
  }
}

const curriedTaskChain = curry(taskChain);
curriedTaskChain()()()(1,2,3);
curriedTaskChain()(1)()(2)(3);
curriedTaskChain(1,2,3);
curriedTaskChain(1)()(2,3);
curriedTaskChain(1,2)()(3,4);