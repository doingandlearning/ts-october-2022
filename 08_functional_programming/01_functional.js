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
var importantNumber = 3;
var addFive = function () {
    importantNumber += 5;
};
var addFivePure = function (num) { return num + 5; };
// console.log(assert.equal(addFivePure(5), 10));
var arr = [1, 3, 2];
arr.map(function (num) { return num * 2; });
console.log(arr);
