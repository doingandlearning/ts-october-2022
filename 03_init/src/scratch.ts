function firstElement<T>(a: Array<T>): T {
  return a[0];
}

const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];

console.log(firstElement<string>(a_s));
console.log(firstElement(a_n));
console.log(firstElement<any>(a_m));

const value = firstElement<string>(a_s);

interface Box<T> {
  inside: T;
}

let stringyBox: Box<string> = {
  inside: "Hello",
};

let numberyBox: Box<any> = {
  inside: 121,
};

interface LinkedNode<Value> {
  next?: LinkedNode<Value>;
  value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
  return node.next ? getLast(node.next) : node.value;
}

let lastDate = getLast({ value: new Date("27-10-2012") });

let lastFruit = getLast({
  next: {
    value: "banana",
  },
  value: "apple",
});

{
  type Nullish<T> = T | null | undefined;

  let name: Nullish<string> = "";
  name = null;
  name = undefined;
}
