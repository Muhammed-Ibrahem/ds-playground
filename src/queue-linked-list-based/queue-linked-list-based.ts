import { LinkedList } from "../linkedlist/linked-list";

export class Queue<T> {
  #dataList: LinkedList<T>;
  constructor(...args: T[]) {
    this.#dataList = new LinkedList<T>(...args);
  }

  enqueue(_data: T): void {
    this.#dataList.insertLast(_data);
  }
  dequeue(): T | null {
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
