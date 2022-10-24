"use strict";
class Greeter {
    constructor(times = 1) {
        this.times = times;
        this.location = "Salford";
        this.accent = "RP";
        this.times = times;
    }
    greet(name) {
        console.log(`Hello ${name}! (in a ${this.accent} accent)`.repeat(this.times));
    }
}
class IrishGreeter extends Greeter {
    constructor(times = 1) {
        super(times);
        this.accent = "Irish";
    }
    greet(name) {
        console.log("I don't know you!");
    }
}
let greeter;
greeter = new Greeter();
greeter.greet("Toby");
let irishGreeter = new IrishGreeter();
irishGreeter.greet("Patrick");
// Prototypical
class School {
    constructor(name) {
        this.name = name;
    }
    static locator() {
        console.log("I'm right here!");
    }
}
class Preschool extends School {
    getStudentTypes() {
        return ["preschooler"];
    }
}
let school = new Preschool("Shiny Happy Kids");
console.log(school.getStudentTypes());
console.log(Preschool.locator());
