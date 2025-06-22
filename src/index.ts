// ===========================================
// =============== LINKED LIST ===============

import { LinkedList } from "./linkedlist/linked-list";

// ===========================================
const linkedList = new LinkedList<number>(1, 2, 3, 4);

linkedList.insertLast(5);
linkedList.insertFirst(0);
linkedList.insertBefore(-1, (data) => data === 1);
linkedList.insertAfter(2.5, (data) => data === 2);
linkedList.deleteHead();
linkedList.deleteTail();
linkedList.deleteNode((data) => data === 2.5);

// PRINT THE LIST
const arr = linkedList.toArray();
console.log(arr);
