import { LinkedList } from "../linkedlist/linked-list";

export class Stack<T> {
  #dataList: LinkedList<T>;
  constructor(...args: T[]) {
    const reversedArgs = args.reverse();
    this.#dataList = new LinkedList<T>(...reversedArgs);
  }

  push(_data: T): void {
    this.#dataList.insertFirst(_data);
  }

  pop(): T | null {
    const data = this.#dataList.head?.data ?? null;
    this.#dataList.deleteHead();

    return data;
  }

  peek(): T | null {
    return this.#dataList.head?.data ?? null;
  }

  hasData(): boolean {
    return this.#dataList.size > 0;
  }

  get size() {
    return this.#dataList.size;
  }
}
