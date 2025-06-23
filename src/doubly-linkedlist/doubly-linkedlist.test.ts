import { DoublyLinkedList } from "./doubly-linkedlist";

describe("Doubly Linked List", () => {
  describe("Insertion", () => {
    describe("insertLast", () => {
      it("should insert node and make it head/tail", () => {
        const dls = new DoublyLinkedList<number>();
        dls.insertLast(10);

        expect(dls.head).toBe(dls.tail);
        expect(dls.head!.data).toBe(dls.tail!.data);
        expect(dls.size).toBe(1);
      });
      it("should append new node, and move tail pointer to that newily added node", () => {
        const dls = new DoublyLinkedList<number>();
        dls.insertLast(10);
        dls.insertLast(20);

        expect(dls.head!.data).toBe(10);
        expect(dls.tail!.data).toBe(20);
        expect(dls.head!.next).toBe(dls.tail);
        expect(dls.tail!.back).toBe(dls.head);
        expect(dls.size).toBe(2);
      });
    });
  });
});
