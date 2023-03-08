// data.ts
export { DataStore as Store };

class DataStore<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  add(item: T) {
    this.data.push(item);
  }
}

// index.ts
import { Store as DataStore } from "./data";

const store = new DataStore<number>();
store.add(42);
