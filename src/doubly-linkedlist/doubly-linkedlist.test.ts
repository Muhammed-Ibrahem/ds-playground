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
    describe("insertAfter", () => {
      it("shouldn't insert anything if list is empty", () => {
        const dls = new DoublyLinkedList<number>();
        dls.insertAfter(1, (data) => data === 10);

        expect(dls.size).toBe(0);
        expect(dls.head).toBeNull();
        expect(dls.tail).toBeNull();
      });
      it("shouldn't insert if specified node doesn't exist", () => {
        const dls = new DoublyLinkedList<number>(1, 2, 3);
        dls.insertAfter(10, (data) => data === 9);

        expect(dls.size).toBe(3);
      });
      it("should insert node after tail and move tail to point at it", () => {
        const dls = new DoublyLinkedList<number>(1, 2, 3);
        dls.insertAfter(4, (data) => data === 3);

        expect(dls.size).toBe(4);
        expect(dls.tail!.data).toBe(4);
        expect(dls.tail!.back!.data).toBe(3);
      });
      it("shoud insert node between two existing node", () => {
        const dls = new DoublyLinkedList<number>(1, 3);
        dls.insertAfter(2, (data) => data === 1);

        expect(dls.size).toBe(3);
        expect(dls.head!.next).toBe(dls.tail!.back);
        expect(dls.head!.next!.back).toBe(dls.head);
        expect(dls.head!.next!.next).toBe(dls.tail);
        expect(dls.tail!.data).toBe(3);
      });
    });
    describe("insertBefore", () => {
      it("should not insert if list is empty", () => {
        const dls = new DoublyLinkedList<number>();
        dls.insertBefore(0, (data) => data === 0);

        expect(dls.size).toBe(0);
        expect(dls.head).toBeNull();
        expect(dls.tail).toBeNull();
      });
      it("should not insert if specified node does not exist", () => {
        const dls = new DoublyLinkedList<number>(1, 2);

        dls.insertBefore(3, (data) => data === 3);

        expect(dls.size).toBe(2);
      });
      it("should insert node before head and make head point at that new node", () => {
        const dls = new DoublyLinkedList<number>(1);

        dls.insertBefore(0, (data) => data === 1);

        expect(dls.head!.data).toBe(0);
        expect(dls.tail!.data).toBe(1);
        expect(dls.size).toBe(2);
      });
      it("should insert node between two existing nodes", () => {
        const dls = new DoublyLinkedList<number>(1, 3);

        dls.insertBefore(2, (data) => data === 3);

        expect(dls.head!.data).toBe(1);
        expect(dls.tail!.data).toBe(3);
        expect(dls.head!.next!.data).toBe(2);
        expect(dls.head!.next).toBe(dls.tail!.back);
        expect(dls.head!.next!.back).toBe(dls.head);
        expect(dls.size).toBe(3);
      });
    });
  });
});
