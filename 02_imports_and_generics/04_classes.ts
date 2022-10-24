// Classes
interface IGreeter {
  location: string;
  times: number;
  accent: string;
}

interface ILogger {
  greet(name: string): void;
}

class Greeter implements IGreeter, ILogger {
  location = "Salford";
  accent = "RP";

  constructor(public times: number = 1) {
    this.times = times;
  }
  greet(name: string) {
    console.log(
      `Hello ${name}! (in a ${this.accent} accent)`.repeat(this.times)
    );
  }
}

class IrishGreeter extends Greeter {
  accent = "Irish";

  constructor(times: number = 1) {
    super(times);
  }
  greet(name: string) {
    console.log("I don't know you!");
  }
}

let greeter: Greeter;

greeter = new Greeter();

greeter.greet("Toby");

let irishGreeter = new IrishGreeter();

irishGreeter.greet("Patrick");
// Prototypical

abstract class School {
  readonly name: string;

  static locator() {
    console.log("I'm right here!");
  }

  constructor(name: string) {
    this.name = name;
  }

  abstract getStudentTypes(): string[];
}

class Preschool extends School {
  getStudentTypes(): string[] {
    return ["preschooler"];
  }
}

let school = new Preschool("Shiny Happy Kids");
console.log(school.getStudentTypes());
console.log(Preschool.locator());
