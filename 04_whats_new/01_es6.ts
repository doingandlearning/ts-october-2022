// 1. Default parameters

function areaOfRect(length: number = 50, width: number = length) {
  // Logic!
  return length * width;
}

areaOfRect(); // 50 * 50
areaOfRect(10); // 10 * 10
areaOfRect(10, 15); // 10 * 15

// 2. Template Literals

var name = "Your name is " + firstName + " " + lastName + ".";

const name = `Your name is ${getFirstName()} ${1 + 1}.`;

// 3. Object Literals

function getLaptop(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

// 4. Arrow functions

// this is defined on creation ...
$(".btn").click((event) => {
  this.doSomething();
});

// this is the calling scope
var _this = this;
$(".btn").click(function (event) {
  _this.doSomething();
});

// 5. let/const replaced var

// let and const block scoped

function letFunction() {
  console.log("Before defining block", scopedLet); // 1
  if (true) {
    let scopedLet = "I am scoped within a block!"; // 2
  }
  console.log("After defining block", scopedLet); // 3
}
// invoke it
letFunction();

function simulateDom() {
  var pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };
  for (var i = 1; i <= 3; i++) {
    // 1
    var element = pseudoDom["button" + i];
    element.click = function () {
      return "Item " + i + " is clicked."; // 2
    };
  }
  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click()); // 3
  return pseudoDom;
}
// prints 'Item 1 is clicked.', 'Item 2 is clicked.', 'Item 3 is clicked.'
simulateDom();
