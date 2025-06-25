import { Queue } from "./queue-linked-list-based";

describe("Queue Linked List Based", () => {
  describe("enqueue", () => {
    it("should push new data to the queue", () => {
      const q = new Queue<number>();

      q.enqueue(1);

      expect(q.size).toBe(1);
      expect(q.peek()).toBe(1);
    });
  });

  describe("dequeue", () => {
    it("should return null if the queue is empty", () => {
      const q = new Queue<number>();

      const data = q.dequeue();

      expect(data).toBeNull();
      expect(q.size).toBe(0);
      expect(q.peek()).toBeNull();
    });
    it("should remove data from the queue and return its value", () => {
      const q = new Queue<number>(1, 2, 3);

      const data = q.dequeue();

      expect(data).toBe(1);
      expect(q.size).toBe(2);
      expect(q.peek()).toBe(2);
    });
  });

  describe("peek", () => {
    it("shoud return the value of the first item of the queue without removing it", () => {
      const q = new Queue<number>(1, 2, 3);

      const data = q.peek();

      expect(data).toBe(1);
      expect(q.size).toBe(3);
    });
  });

  describe("hasData", () => {
    it("should return false if queue is empty", () => {
      const q = new Queue<number>();

      expect(q.hasData()).toBe(false);
    });
    it("should return true if queue has atleast one value", () => {
      const q = new Queue<number>(1);

      expect(q.hasData()).toBe(true);
    });
  });
});
