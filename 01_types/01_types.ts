{
  let name: string | number = "Kevin";

  let a = 10;
  let b = 5;

  const c = a + b;

  a = Number.MAX_VALUE;
  // b = "";

  let isOn: boolean;
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

  function logMessage(): void {
    console.log("hello");
  }
}

{
  const c = add(1, 2);
  function add(a: number, b: number) {
    return a + b;
  }
  const multiply = function (a: number, b: number): number {
    return a * b;
  };
  const d = multiply(2, 3);

  const divide = (a: number, b: number): number => a / b;
}

{
  const a = "Hello";
  let b = "Hello";
  type Kingdom = "Bacteria" | "Protozoa" | "Chromista";
  let k: Kingdom;
  k = "Chromista";
  const test = "Chromista";

  function whichType(): Kingdom {
    return "Bacteria";
  }
}

{
  enum BoxSize {
    Small = "sm0120",
    Medium = "med12",
    Large = "la121",
    XLarge = "1920x1080",
  }

  console.log(BoxSize.Large);
}

{
  // Array

  const names = ["Emma", "Catherine", "Amanda"];

  names.push("Michael");
  names.push("Ivan");
  names.push(7337);

  const locations: Array<string | number> = [];
  locations.push("Salford");
  locations.push("Glasgow");
  locations.push("London");

  let tupleArray: [number, string, boolean];

  tupleArray = [3, "parts", true];
}
