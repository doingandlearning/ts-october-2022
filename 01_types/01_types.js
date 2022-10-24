"use strict";
{
    let name = "Kevin";
    let a = 10;
    let b = 5;
    const c = a + b;
    a = Number.MAX_VALUE;
    // b = "";
    let isOn;
}
{
    // any, never, void
    let a;
    a = "Good morning BBC";
    a = 123;
    a = true;
    a = [];
    // function test(): never {
    //   if (false) {
    //     return;
    //   }
    //   return "Here too!";
    // }
    function logMessage() {
        console.log("hello");
    }
}
{
    const c = add(1, 2);
    function add(a, b) {
        return a + b;
    }
    const multiply = function (a, b) {
        return a * b;
    };
    const d = multiply(2, 3);
    const divide = (a, b) => a / b;
}
{
    const a = "Hello";
    let b = "Hello";
    let k;
    k = "Chromista";
    const test = "Chromista";
    function whichType() {
        return "Bacteria";
    }
}
{
    let BoxSize;
    (function (BoxSize) {
        BoxSize["Small"] = "sm0120";
        BoxSize["Medium"] = "med12";
        BoxSize["Large"] = "la121";
        BoxSize["XLarge"] = "1920x1080";
    })(BoxSize || (BoxSize = {}));
    console.log(BoxSize.Large);
}
{
    // Array
    const names = ["Emma", "Catherine", "Amanda"];
    names.push("Michael");
    names.push("Ivan");
    names.push(7337);
    const locations = [];
    locations.push("Salford");
    locations.push("Glasgow");
    locations.push("London");
    let tupleArray;
    tupleArray = [3, "parts", true];
}
