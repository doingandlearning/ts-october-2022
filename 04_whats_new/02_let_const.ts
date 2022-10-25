// function simulateDom() {
//   var pseudoDom = {
//     button1: {},
//     button2: {},
//     button3: {},
//   };
//   for (var i = 1; i <= 3; i++) {
//     // 1
//     var element = pseudoDom["button" + i];
//     element.click = function () {
//       return "Item " + i + " is clicked."; // 2
//     };
//   }
//   console.log(pseudoDom.button1.click());
//   console.log(pseudoDom.button2.click());
//   console.log(pseudoDom.button3.click()); // 3
//   return pseudoDom;
// }
// // prints 'Item 1 is clicked.', 'Item 2 is clicked.', 'Item 3 is clicked.'
// simulateDom();

const arr1 = [{ name: "ali" }, { name: "toby" }, { name: "emma" }];
const arr2 = structuredClone(arr1);
arr1[0].name = "Waleed";
console.log(arr1);
console.log(arr2);
