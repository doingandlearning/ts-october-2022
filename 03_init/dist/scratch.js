"use strict";
function firstElement(a) {
    return a[0];
}
const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];
console.log(firstElement(a_s));
console.log(firstElement(a_n));
console.log(firstElement(a_m));
const value = firstElement(a_s);
let stringyBox = {
    inside: "Hello",
};
let numberyBox = {
    inside: 121,
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
let lastDate = getLast({ value: new Date("27-10-2012") });
let lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple",
});
{
    let name = "";
    name = null;
    name = undefined;
}
