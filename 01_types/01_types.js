"use strict";
{
    var name_1 = "Kevin";
    var a = 10;
    var b = 5;
    var c = a + b;
    a = Number.MAX_VALUE;
    // b = "";
    var isOn = void 0;
}
{
    // any, never, void
    var a = void 0;
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
    var c = add(1, 2);
    function add(a, b) {
        return a + b;
    }
    var multiply = function (a, b) {
        return a * b;
    };
    var d = multiply(2, 3);
    var divide = function (a, b) { return a / b; };
}
{
    var a = "Hello";
    var b = "Hello";
    var k = void 0;
    k = "Chromista";
    var test_1 = "Chromista";
    function whichType() {
        return "Bacteria";
    }
}
{
    var BoxSize = void 0;
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
    var names = ["Emma", "Catherine", "Amanda"];
    names.push("Michael");
    names.push("Ivan");
    names.push(7337);
    var locations = [];
    locations.push("Salford");
    locations.push("Glasgow");
    locations.push("London");
    var tupleArray = void 0;
    tupleArray = [3, "parts", true];
}
