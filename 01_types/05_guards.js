"use strict";
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
var usExchange = function () { return "1.134"; };
padLeft("£", usExchange());
padLeft(10, "Current PM");
