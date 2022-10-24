"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_assert_1 = __importDefault(require("node:assert"));
// npm init -y
// npm install @types/node
// Run this file in two ways:
// 1: Compile with tsc and then run with Node (`node typing_exercise.js`)
// 2: Run directly with ts-node (`ts-node typing_exercise.ts`)
// The number of errors might be overwhelming initially, so comment out what you
// are not working on or haven't completed.
// This will process a string and will capitalize the first letter of each word
// but will make all the other letters lowercase.
function toTitleCase(title) {
    return title
        .toLowerCase()
        .split(" ")
        .map(function (word) { return word[0].toUpperCase() + word.substring(1).toLowerCase(); })
        .join(" ");
}
node_assert_1.default.equal(toTitleCase("war AND peace"), "War And Peace");
node_assert_1.default.equal(toTitleCase("Catcher in the Rye"), "Catcher In The Rye");
node_assert_1.default.equal(toTitleCase("tO kILL A mOCKINGBIRD"), "To Kill A Mockingbird");
console.log("toTitleCase passes.");
// // // This will count the number of separate words within a string. Words are
// // // delimited by spaces, dashes (-), or underscores (_).
function countWords(title) {
    var words = title.split(/[ _-]/);
    return words.length;
}
node_assert_1.default.equal(countWords("War and Peace"), 3);
node_assert_1.default.equal(countWords("catcher-in-the-rye"), 4);
node_assert_1.default.equal(countWords("for_whom the-bell-tolls"), 5);
console.log("countWords passes.");
// // This will return all the words that are within a string. Words are delimited
// // by spaces, dashes (-), or underscores (_).
// function toWords() {}
// assert.deepEqual(toWords("War and Peace"), ["War", "and", "Peace"]);
// assert.deepEqual(toWords("catcher-in-the-rye"), [
//   "catcher",
//   "in",
//   "the",
//   "rye",
// ]);
// assert.deepEqual(toWords("for_whom the-bell-tolls"), [
//   "for",
//   "whom",
//   "the",
//   "bell",
//   "tolls",
// ]);
// console.log("toWords passes.");
// // This will take a string and a number and return that same string repeated
// // that number of times.
// function repeat() {}
// assert.strictEqual(repeat("War", 3), "WarWarWar");
// assert.strictEqual(repeat("rye", 1), "rye");
// assert.strictEqual(repeat("bell", 0), "");
// console.log("repeat passes.");
// // This will return true if the string only has alpha characters (that is,
// // letters). Test cases for this function are as follows:
// function isAlpha() {}
// assert.strictEqual(isAlpha("War and Peace"), false);
// assert.strictEqual(isAlpha("Atonement"), true);
// assert.strictEqual(isAlpha("1Q84"), false);
// console.log("isAlpha passes.");
// // This will return true if the string is blank, that is, consists only of
// // whitespace characters.
// function isBlank() {}
// assert.strictEqual(isBlank("War and Peace"), false);
// assert.strictEqual(isBlank("         "), true);
// assert.strictEqual(isBlank(""), true);
// console.log("isBlank passes.");
// console.log("All tests passed.");
