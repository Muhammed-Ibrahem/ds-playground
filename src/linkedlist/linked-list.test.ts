import { LinkedList } from "./linked-list";

describe("Linked List", () => {
  describe("Instantiation", () => {
    it("should create an empty linked-list with null head/tail", () => {
      const linkedList = new LinkedList<number>();

      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.size).toBe(0);
    });

    it("should create a linked-list filled with the provided data", () => {
      const linkedList = new LinkedList(1, 2, 3, 4);

      expect(linkedList.size).toBe(4);
      expect(linkedList.head!.data).toBe(1);
      expect(linkedList.tail!.data).toBe(4);
    });
  });

  describe("Search", () => {
    describe("find", () => {
      it("should return null if specified node wasn't found", () => {
        const list = new LinkedList<number>(1, 2, 3, 4);
        const shouldBeNull = list.find((data) => data === 10);

        expect(shouldBeNull).toBeNull();
      });
      it("should search the list and return the data of a specified node", () => {
        const list = new LinkedList<number>(1, 2, 3, 4);

        const node = list.find((data) => data === 2);

        expect(node).not.toBeNull();
        expect(node).toBe(2);
      });
    });
  });

  describe("Insertion", () => {
    describe("insertLast", () => {
      it("should insert first element and make head/list to point at them", () => {
        const linkedList = new LinkedList<number>();
        const passedValue = 1;
        linkedList.insertLast(passedValue);

        expect(linkedList.tail).not.toBeNull();
        expect(linkedList.tail!.data).toBe(passedValue);
        expect(linkedList.head!.data).not.toBeNull();
        expect(linkedList.size).toBe(1);
      });

      it("should insert data and append it to the list", () => {
        const linkedList = new LinkedList<number>();
        const valOne = 1;
        const valTwo = 2;

        linkedList.insertLast(valOne);
        linkedList.insertLast(valTwo);

        expect(linkedList.head!.data).toBe(valOne);
        expect(linkedList.tail!.data).toBe(valTwo);
        expect(linkedList.size).toBe(2);
      });
    });

    describe("insertFirst", () => {
      it("should insert first element at make head/tail point at it", () => {
        const linkedList = new LinkedList<number>();
        const passedVal = 1;

        linkedList.insertFirst(passedVal);

        expect(linkedList.head).not.toBeNull();
        expect(linkedList.head).not.toBeNull();
        expect(linkedList.head!.data).toBe(passedVal);
        expect(linkedList.tail!.data).toBe(passedVal);
        expect(linkedList.size).toBe(1);
      });

      it("should insert data at the beginning of the list", () => {
        const linkedList = new LinkedList<number>();
        const valOne = 1;
        const valTwo = 2;

        linkedList.insertFirst(valOne);
        linkedList.insertFirst(valTwo);

        expect(linkedList.head!.data).toBe(valTwo);
        expect(linkedList.tail!.data).toBe(valOne);
        expect(linkedList.size).toBe(2);
      });
    });

    describe("insertAfter", () => {
      it("shouldn't insert any data if the list is empty", () => {
        const linkedList = new LinkedList<number>();

        linkedList.insertAfter(1, (data) => data === 10);

        expect(linkedList.size).toBe(0);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
      });
      it("shouldn't insert data if the specified data is not found", () => {
        const linkedList = new LinkedList<number>(1, 2, 3);

        linkedList.insertAfter(50, (data) => data === 10);

        expect(linkedList.size).toBe(3);
      });
      it("should insert data after specified existing data", () => {
        const linkedList = new LinkedList(1, 2, 3, 4);

        linkedList.insertAfter(5, (data) => data === 1);

        expect(linkedList.size).toBe(5);
        expect(linkedList.head!.next!.data).toBe(5);
      });
      it("should insert data after tail and change tail to point at it", () => {
        const linkedList = new LinkedList(1, 2, 3, 4);

        linkedList.insertAfter(5, (data) => data === 4);

        expect(linkedList.size).toBe(5);
        expect(linkedList.tail!.data).toBe(5);
      });
    });
    describe("insertBefore", () => {
      it("shouldn't do insertion on empty list", () => {
        const list = new LinkedList<number>();
        list.insertBefore(1, (data) => data === 2);

        expect(list.size).toBe(0);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
      });
      it("shouldn't insert if node doesn't exit", () => {
        const list = new LinkedList<number>(2, 3, 4);
        list.insertBefore(1, (data) => data === 1);

        expect(list.size).toBe(3);
      });

      it("should insert new data right before head and make head point at it", () => {
        const list = new LinkedList(1, 2, 3, 4);
        list.insertBefore(0, (data) => data === 1);

        expect(list.head!.data).toBe(0);
        expect(list.head!.next!.data).toBe(1);
        expect(list.size).toBe(5);
      });

      it("should insert new data right before the specifed node and parent node to point at it", () => {
        const list = new LinkedList(1, 2, 3, 4);
        list.insertBefore(0, (data) => data === 2);

        expect(list.head!.data).toBe(1);
        expect(list.head!.next!.data).toBe(0);
        expect(list.size).toBe(5);
      });
    });
  });

  describe("Array-Like Methods", () => {
    describe("map", () => {
      it("should loop over the data and return a new list with the new provided data", () => {
        const list = new LinkedList<number>(1, 2, 3, 4, 5);
        const newList = list.map((item) => item * 10);

        expect(newList.head!.data).toBe(10);
        expect(newList.tail!.data).toBe(50);
      });
    });

    describe("filter", () => {
      it("should loop over the data and return only the data that passed from the filter function", () => {
        const list = new LinkedList(1, 2, 3, 4, 5);

        const newList = list.filter((data) => data === 1);

        expect(newList.size).toBe(1);
        expect(newList.head!.data).toBe(newList.tail!.data);
      });
    });

    describe("reduce", () => {
      it("should loop over the data and apply reduction to it so it fits the new data", () => {
        const list = new LinkedList(1, 2, 3, 4, 5);

        const newOutput = list.reduce((acc, cur) => acc + cur, 0);

        expect(newOutput).toBe(0 + 1 + 2 + 3 + 4 + 5);
      });
    });

    describe("toArray", () => {
      it("should return an array of the list data", () => {
        const list = new LinkedList(1, 2, 3, 4, 5);

        const arr = list.toArray();

        expect(arr.length).toBe(5);
        expect(Array.isArray(arr)).toBeTruthy();
        expect(arr[0]).toBe(1);
        expect(arr[4]).toBe(5);
      });
    });
  });

  describe("Deletion", () => {
    describe("deleteNode", () => {
      it("should not act if node doesn't exist", () => {
        const list = new LinkedList(1, 2, 3, 4);

        list.deleteNode((data) => data === 5);

        expect(list.size).toBe(4);
      });
      it("should delete the specified node", () => {
        const list = new LinkedList(1, 2, 3, 4);

        list.deleteNode((data) => data === 2);

        expect(list.head!.next!.data).toBe(3);
        expect(list.size).toBe(3);
      });
      it("should delete head and  nullish the head/tail", () => {
        const list = new LinkedList(1);

        list.deleteNode((data) => data === 1);

        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.size).toBe(0);
      });
      it("should delete head and make head point to the next node", () => {
        const list = new LinkedList(1, 2);

        list.deleteNode((data) => data === 1);

        expect(list.head).toBe(list.tail);
        expect(list.head!.data).toBe(list.tail!.data);
        expect(list.size).toBe(1);
      });
      it("should delete tail and point tail to the parent node", () => {
        const list = new LinkedList(1, 2);

        list.deleteNode((data) => data === 2);

        expect(list.head).toBe(list.tail);
        expect(list.head!.data).toBe(list.tail!.data);
        expect(list.size).toBe(1);
      });
    });

    describe("deleteHead", () => {
      it("should delete the head node", () => {
        const list = new LinkedList(1, 2, 3, 4);
        const oldHead = list.head;
        list.deleteHead();

        expect(oldHead).not.toBe(list.head);
        expect(list.head!.data).toBe(2);
      });

      it("shoud do nothing if list is empty | no head", () => {
        const list = new LinkedList();
        list.deleteHead();
        expect(list.size).toBe(0);
      });
    });

    describe("deleteTail", () => {
      it("should delete the tail node", () => {
        const list = new LinkedList(1, 2, 3, 4);
        const oldTail = list.tail;
        list.deleteTail();

        expect(oldTail).not.toBe(list.tail);
        expect(list.tail!.data).toBe(3);
      });
      it("shoud delete head/tail together", () => {
        const list = new LinkedList(1);
        list.deleteTail();

        expect(list.size).toBe(0);
      });
      it("shoud do nothing if list is empty | no tail", () => {
        const list = new LinkedList();
        list.deleteTail();
        expect(list.size).toBe(0);
      });
    });
  });
});
