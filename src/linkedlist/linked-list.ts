export class ListNode<T> {
  constructor(public data: T, public next: ListNode<T> | null = null) {}
}
export class LinkedListIterator<T> {
  #currentNode: ListNode<T> | null = null;

  constructor(node: ListNode<T> | null) {
    this.#currentNode = node;
  }

  current(): ListNode<T> | null {
    return this.#currentNode;
  }
  next(): LinkedListIterator<T> | null {
    this.#currentNode = this.#currentNode?.next ?? null;
    return this;
  }
}
export class LinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  #length: number = 0;

  constructor(...args: T[]) {
    args.forEach((arg) => this.insertLast(arg));
  }

  #begin(): LinkedListIterator<T> {
    return new LinkedListIterator<T>(this.head);
  }
  #findNode(callbackFn: (node: ListNode<T>) => boolean): ListNode<T> | null {
    const itr = this.#begin();
    let node: ListNode<T> | null = null;

    while ((node = itr.current()) !== null) {
      if (callbackFn(node)) {
        return node;
      }
      itr.next();
    }
    return null;
  }

  #nodeParent(node: ListNode<T>): ListNode<T> | null {
    const itr = this.#begin();
    let currentNode;
    while ((currentNode = itr.current()) !== null) {
      if (currentNode.next === node) {
        return currentNode;
      }
      itr.next();
    }
    return null;
  }
  find(callbackFn: (passedData: T) => boolean): T | null {
    const itr = this.#begin();
    let currentNode;
    while ((currentNode = itr.current()) !== null) {
      if (callbackFn(currentNode.data)) {
        return currentNode.data;
      }
      itr.next();
    }

    return null;
  }
  insertLast(_data: T) {
    const newNode = new ListNode<T>(_data);

    if (this.tail === null) {
      // empty list
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; // shifting the tail pointer to point at the new node
    }

    this.#length++;
  }
  insertFirst(_data: T) {
    const newNode = new ListNode<T>(_data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.#length++;
  }

  insertAfter(_data: T, callbackFn: (passedData: T) => boolean) {
    const itr = this.#begin();
    let node: ListNode<T> | null = null;
    let currentNode;
    while ((currentNode = itr.current()) !== null) {
      if (callbackFn(currentNode.data)) {
        node = currentNode;
        break;
      }
      itr.next();
    }

    if (!node) return;

    const newNode = new ListNode<T>(_data);

    newNode.next = node.next;
    node.next = newNode;

    if (node === this.tail) this.tail = newNode;

    this.#length++;
  }
  insertBefore(_data: T, callbackFn: (passedData: T) => boolean) {
    const itr = this.#begin();
    let node: ListNode<T> | null = null;
    let currentNode;
    while ((currentNode = itr.current()) !== null) {
      if (callbackFn(currentNode.data)) {
        node = currentNode;
        break;
      }
      itr.next();
    }

    if (!node) return;

    const newNode = new ListNode<T>(_data);
    const parentNode = this.#nodeParent(node);
    newNode.next = node;

    if (parentNode) {
      parentNode.next = newNode;
    } else {
      this.head = newNode;
    }

    this.#length++;
  }

  map<Output>(callbackFn: (_data: T) => Output): LinkedList<Output> {
    const newList: LinkedList<Output> = new LinkedList<Output>();
    const itr = this.#begin();
    let node;
    while ((node = itr.current()) !== null) {
      newList.insertLast(callbackFn(node.data));
      itr.next();
    }
    return newList;
  }

  filter(callbackFn: (_data: T) => boolean): LinkedList<T> {
    const itr = this.#begin();
    const newList = new LinkedList<T>();
    let node;

    while ((node = itr.current()) !== null) {
      if (callbackFn(node.data)) {
        newList.insertLast(node.data);
      }
      itr.next();
    }

    return newList;
  }
  reduce<Output>(
    callbackFn: (previousValue: Output, currentValue: T) => Output,
    initialValue: Output
  ): Output {
    let output = initialValue;
    const itr = this.#begin();

    let node;
    while ((node = itr.current()) !== null) {
      output = callbackFn(output, node.data);
      itr.next();
    }
    return output;
  }
  toArray(): T[] {
    const itr = this.#begin();
    const outputArray: T[] = [];
    let node;
    while ((node = itr.current()) !== null) {
      outputArray.push(node.data);
      itr.next();
    }

    return outputArray;
  }

  deleteNode(callbackFn: (_data: T) => boolean) {
    let nodeToDelete = this.#findNode((node) => callbackFn(node.data));

    if (!nodeToDelete) return;

    if (nodeToDelete === this.head) return this.deleteHead();
    if (nodeToDelete === this.tail) return this.deleteTail();

    const nodeParent = this.#nodeParent(nodeToDelete)!;

    nodeParent.next = nodeToDelete.next;

    nodeToDelete = null;
    this.#length--;
  }
  deleteHead() {
    if (this.head) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.#length--;
    }
  }

  deleteTail() {
    if (this.tail) {
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        const tailParent = this.#nodeParent(this.tail)!;

        tailParent.next = null;
        this.tail = tailParent;
      }

      this.#length--;
    }
  }

  get size(): number {
    return this.#length;
  }
}
