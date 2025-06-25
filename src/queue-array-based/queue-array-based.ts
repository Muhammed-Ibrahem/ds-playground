export class Queue<T> {
  #dataList: (T | null)[];
  #head: number = 0;
  #tail: number = 0;
  #size: number = 0;
  #capacity: number;

  constructor(capacity = 16, ...args: T[]) {
    this.#capacity = Math.max(capacity, args.length || 1);
    this.#dataList = Array(this.#capacity).fill(null);

    for (const item of args) {
      this.enqueue(item);
    }
  }

  enqueue(_data: T): void {
    if (this.#size === this.#capacity) {
      this.#resize();
    }

    this.#dataList[this.#tail] = _data;
    this.#tail = (this.#tail + 1) % this.#capacity;
    this.#size++;
  }

  dequeue(): T | null {
    if (this.#size === 0) return null;

    const data = this.#dataList[this.#head];
    this.#dataList[this.#head] = null;
    this.#head = (this.#head + 1) % this.#capacity;
    this.#size--;

    return data ?? null;
  }

  peek(): T | null {
    return this.#size > 0 ? this.#dataList[this.#head] ?? null : null;
  }

  hasData(): boolean {
    return this.#size > 0;
  }

  get size() {
    return this.#size;
  }

  #resize() {
    const newCapacity = this.#capacity * 2;
    const newBuffer: (T | null)[] = Array(newCapacity).fill(null);

    for (let i = 0; i < this.#size; i++) {
      newBuffer[i] = this.#dataList[(this.#head + i) % this.#capacity] ?? null;
    }

    this.#dataList = newBuffer;
    this.#head = 0;
    this.#tail = this.#size;
    this.#capacity = newCapacity;
  }
}
