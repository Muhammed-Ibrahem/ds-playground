import { DoublyLinkedList } from "./doubly-linkedlist";

describe("Doubly Linked List", () => {
  describe("Instanciation", () => {
    it("should create an empty d-linked-list", () => {
      const dls = new DoublyLinkedList<number>();

      expect(dls.size).toBe(0);
      expect(dls.head).toBeNull();
      expect(dls.tail).toBeNull();
    });
    it("should create a d-linked-list with the provided values", () => {
      const dls = new DoublyLinkedList<number>(1, 2, 3, 4);

      expect(dls.size).toBe(4);
      expect(dls.head!.data).toBe(1);
      expect(dls.tail!.data).toBe(4);
    });
  });
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
    describe("insertFirst", () => {
      it("should insert a node and make it head/tail", () => {
        const dls = new DoublyLinkedList<number>();

        dls.insertFirst(1);

        expect(dls.head).toBe(dls.tail);
        expect(dls.head!.data).toBe(dls.tail!.data);
        expect(dls.size).toBe(1);
      });
      it("should prepend a new node, make head to point to that newily add node", () => {
        const dls = new DoublyLinkedList<number>();
        dls.insertFirst(10);
        dls.insertFirst(20);

        expect(dls.head!.data).toBe(20);
        expect(dls.tail!.data).toBe(10);
        expect(dls.head!.next).toBe(dls.tail);
        expect(dls.tail!.back).toBe(dls.head);
        expect(dls.size).toBe(2);
      });
    });
  });
});
