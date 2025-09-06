// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses
// interface IStack {
//     push(e: string): void;
//     pop(): string | undefined;
//     peek(): string | undefined;
//     size(): number;
// }
// class Stack implements IStack {
//     private storage: string[] = [];
//
//     push(item: string) {
//         this.storage.push(item);
//     }
//     pop(): string | undefined {
//         return this.storage.pop();
//     }
//     peek():string {
//         return this.storage[this.size() - 1];
//     }
//
//     size(): number {
//         return this.storage.length;
//     }
// }
//
// function isValid(s: string): boolean {
//     const stack = new Stack();
//     for (let i = 0; i < s.length; i++ ) {
//         if(s[i] === '}' ) {
//             if (stack.peek() === '{') {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         } else if(s[i] === ']') {
//             if (stack.peek() === '[') {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         } else {
//             stack.push(s[i]);
//         }
//     }
//     return stack.size() == 0;
// }
// console.log(isValid(s));

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
//
// let head: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// console.log(head);
// const stack: number[] = [];
// while(head != null){
//     stack.push(head.val);
//     head = head.next;
// }
// let result = null;
// let list = null;
// while(stack.length > 0) {
//     const newNode = new ListNode(stack.pop());
//     if(list == null) {
//         list = newNode;
//         result = newNode;
//     } else {
//         list.next = newNode;
//         list = newNode;
//         // list = list.next;
//     }
// }
// console.log(result);

//283. Move Zeroes
//https://leetcode.com/problems/move-zeroes

// 704. Binary Search
// https://leetcode.com/problems/binary-search

// const nums: number[] = [1,2,3,4];
// const target: number = 4
// // console.log(Math.floor(7/3));
// console.log(getInRange(nums, 0, nums.length - 1, target));
// //
// function getInRange(nums: number[], left: number, right: number, target: number): number {
//   if (left == right) {
//     return target == nums[left] ? left : -1;
//   } else {
//     const middle: number = left + Math.floor((right - left) / 2);
//     if (nums[middle] == target) {
//       return middle;
//     } else if (nums[middle] > target) {
//       return getInRange(nums, left, middle, target);
//     } else {
//       return getInRange(nums, middle + 1, right, target);
//     }
//   }
// }

// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree
// Definition for a binary tree node.
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
//
// function maxDepth(root: TreeNode | null): number {
//   if (root === null) {
//     return 0;
//   }
//   let maxDepth: number | undefined = 1;
//   maxDepth = func(root, maxDepth, 1);
//
//   return maxDepth || 0;
// }
//
// function func(root: TreeNode | null, maxDepth: number, depth: number): number | undefined {
//   if (root === null) {
//     return depth;
//   }
//
//   if (root.left !== null) {
//     maxDepth = Math.max(depth+1, maxDepth);
//     func(root.left, maxDepth, depth+1);
//   }
//   if (root.right !== null) {
//     maxDepth = Math.max(depth+1, maxDepth);
//     func(root.right, maxDepth, depth+1);
//   }
// }
//
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log(maxDepth(root));


// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements
function topKFrequent(nums: number[], k: number): number[] {
  const result: number[] = [];

  const countMap = new Map<number, number>();
  for (let entry of nums) {
    countMap.set(entry, (countMap.get(entry) ?? 0) + 1);
  }

  const freq: number[] = new Array(nums.length + 1);
  for (const [key, value] of countMap.entries()) {
    freq[value] = key;
  }

  let i = freq.length - 1;
  while (k > 0) {
    if (freq[i] != undefined) {
      result.push(freq[i]);
      k--;
    }
    i--;
  }
  return result;
}
console.log(topKFrequent([1,1,2,2,2,3],2));