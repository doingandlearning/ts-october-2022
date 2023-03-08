// data.ts
export interface ICountable {
  count: number;
}

export class DataStore<T extends ICountable> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  add(item: T) {
    this.data.push(item);
  }

  getCount() {
    return this.data.reduce((acc, curr) => acc + curr.count, 0);
  }
}

// index.ts
import { DataStore, ICountable } from "./data";

const obj: ICountable = { count: 3 };
const store = new DataStore<ICountable>();
store.add(obj);
console.log(store.getCount()); // Output: 3
