// data.ts
export interface IDataItem {
  id: number;
  name: string;
}

export default class DataStore<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  add(item: T) {
    this.data.push(item);
  }
}

// data2.ts
export { default as DataStore } from "./data";

// index.ts
import { DataStore } from "./data2";

const store = new DataStore<IDataItem>();
store.add({ id: 1, name: "John" });
const store2 = new DataStore<number>();
store2.add(42);
