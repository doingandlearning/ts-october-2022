function add(a: number, b: number) {}
function addLots(...num: number[]) {
  return num.reduce((a, c) => a + c, 0);
}
console.log(addLots());
console.log(addLots(1, 2, 3, 4, 5));

function overload(name: string): string;
function overload(age: number): string;
function overload(isSingle: boolean): string;
function overload(value: string | number | boolean): string {
  switch (typeof value) {
    case "string":
      return `Hello, my name is ${value}.`;
    case "number":
      return `Hello, my age is ${value}.`;
    case "boolean":
      return `Hello, I ${value ? "am" : "am not"} single.`;
    default:
      throw new Error("Invalid use of function.");
  }
}

console.log(overload("Kevin"));
console.log(overload(39));
console.log(overload(false));
