// data.ts
export default class DataStore<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  add(item: T) {
    this.data.push(item);
  }
}

// index.ts
import DataStore from "./data";

const store = new DataStore<string>();
store.add("hello");
const store2 = new DataStore<number>();
store2.add(42);
