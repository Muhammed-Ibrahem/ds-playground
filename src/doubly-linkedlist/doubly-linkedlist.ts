class DoublyListNode<T> {
  constructor(
    public data: T,
    public next: DoublyListNode<T> | null = null,
    public back: DoublyListNode<T> | null = null
  ) {}
}

class DoublyListIterator<T> {
  #currentNode: DoublyListNode<T> | null = null;
  constructor(currentNode: DoublyListNode<T> | null) {
    this.#currentNode = currentNode;
  }

  next(): DoublyListIterator<T> | null {
    this.#currentNode = this.#currentNode?.next ?? null;
    return this;
  }
  current(): DoublyListNode<T> | null {
    return this.#currentNode;
  }
}
export class DoublyLinkedList<T> {
  #length: number;
  public head: DoublyListNode<T> | null = null;
  public tail: DoublyListNode<T> | null = null;
  constructor(...args: T[]) {
    this.#length = 0;
    args.forEach((arg) => this.insertLast(arg));
  }

  #begin() {
    return new DoublyListIterator<T>(this.head);
  }
  #findNode(callbackFn: (passedData: T) => boolean): DoublyListNode<T> | null {
    const itr = this.#begin();
    let node = null;
    while ((node = itr.current()) !== null) {
      if (callbackFn(node.data)) {
        return node;
      }
      itr.next();
    }

    return null;
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

  insertFirst(_data: T): void {
    const newNode = new DoublyListNode<T>(_data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.back = newNode;
      this.head = newNode;
    }

    this.#length++;
  }

  insertAfter(_data: T, callbackFn: (passedData: T) => boolean): void {
    if (this.#length === 0) return;

    const node = this.#findNode(callbackFn);

    if (!node) return;

    const newNode = new DoublyListNode<T>(_data);

    newNode.back = node;

    if (node === this.tail) {
      node.next = newNode;
      this.tail = newNode;
    } else {
      newNode.next = node.next;
      node.next!.back = newNode;
      node.next = newNode;
    }

    this.#length++;
  }

  get size() {
    return this.#length;
  }
}
