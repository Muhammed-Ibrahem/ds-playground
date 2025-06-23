class DoublyListNode<T> {
  constructor(
    public data: T,
    public next: DoublyListNode<T> | null = null,
    public back: DoublyListNode<T> | null = null
  ) {}
}

export class DoublyLinkedList<T> {
  #length: number;
  public head: DoublyListNode<T> | null = null;
  public tail: DoublyListNode<T> | null = null;
  constructor(...args: T[]) {
    this.#length = 0;
    args.forEach((arg) => this.insertLast(arg));
  }

  insertLast(_data: T): void {
    const newNode = new DoublyListNode<T>(_data);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.back = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.#length++;
  }

  get size() {
    return this.#length;
  }
}
