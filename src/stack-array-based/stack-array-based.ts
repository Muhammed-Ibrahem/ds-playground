export class Stack<T> {
  #dataList: T[] = [];
  constructor(...args: T[]) {
    this.#dataList = [...args];
  }

  push(_data: T): void {
    this.#dataList.push(_data);
  }
  pop(): T | null {
    return this.#dataList.pop() ?? null;
  }
  peek(): T | null {
    return this.#dataList[this.#dataList.length - 1] ?? null;
  }
  hasData(): boolean {
    return this.#dataList.length > 0;
  }
  get size() {
    return this.#dataList.length;
  }
}
