class DoublyListNode<T> {
  constructor(
    public data: T,
    public next: DoublyListNode<T> | null = null,
    public back: DoublyListNode<T> | null = null
  ) {}
}

export class DoublyLinkedList<T> {
  #length: number;
  constructor(
    public head: DoublyListNode<T> | null = null,
    public tail: DoublyListNode<T> | null = null
  ) {
    this.#length = 0;
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
