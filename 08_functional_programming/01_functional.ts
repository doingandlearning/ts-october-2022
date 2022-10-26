import * as assert from "node:assert";
// Functional Programming

// Haskell
// One thing

// Easier to test
// Pure
// Same input -> same output
// No side effects

// Easier to reason about

// Concurrency

// Caching

// Multi-paradigm
// function executor(callback) {
//   callback("Hello");
// }

// executor(console.log);
// const add = () => {};
// const subtract = function () {};

let importantNumber = 3;

const addFive = () => {
  importantNumber += 5;
};

const addFivePure = (num: number) => num + 5;
assert.equal(addFivePure(5), 10);

const arr = [1, 3, 2];
const newArr = arr.map((num) => num * 2);

console.log(arr);
console.log(newArr);

const filteredArr = arr.filter((num) => num > 2);
console.log(arr);
console.log(filteredArr);

// [1, 3, 2]
const reducedArr = arr.reduce(
  (previousValue, currentValue) => Math.max(previousValue, currentValue),
  0
);
console.log(reducedArr);

const sortedArr = [...arr].sort((a, b) => a - b);
const sortedArr1 = structuredClone(arr).sort((a, b) => a - b);

function sortValues(...values: number[]) {
  return values.sort((a, b) => a - b);
}

sortValues(3, 4, 5, 6, 7, 2, 1, 2, 3, 4);
// [1,2,3,4]
// [ [], {}, []]
console.log(sortedArr);
console.log(arr);
