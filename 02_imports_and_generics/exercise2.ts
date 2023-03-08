// data.ts
export interface IDataStore<T> {
  add(item: T): void;
}

export interface IDataItem {
  id: number;
  name: string;
}

export class DataStore implements IDataStore<IDataItem> {
  private data: IDataItem[];

  constructor() {
    this.data = [];
  }

  add(item: IDataItem) {
    this.data.push(item);
  }
}

// index.ts
import { IDataStore, IDataItem } from "./data";

const store: IDataStore<IDataItem> = new DataStore();
store.add({ id: 1, name: "John" });
