"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photos_json_1 = require("./photos.json");
// console.log(photos);
const photo = photos_json_1.photos[0];
console.log(photo, typeof photo);
// destructuring
// picking/selecting ...
// Arrays
const array1 = [
    ["Patrick", "Toby", "Waleed"],
    ["Trevor", "Ali", "Ajit"],
];
const [[, , capt1], [, , capt2]] = array1;
console.log(capt1, capt2);
// const first = array1[0]
// const second = array1[1]
// const third = array1[2]
// Objects
const user = {
    name: "Emma",
    location: "Salford",
    favouriteDoctor: "Jodi Whitaker",
};
const { favouriteDoctor: emmaDoctor } = user;
console.log(emmaDoctor);
