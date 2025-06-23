import { Stack } from "./stack-linked-list-based";

describe("Stack LinkedList Based FILO", () => {
  describe("push", () => {
    it("should push data to the stack", () => {
      const stk = new Stack<number>(1, 2, 3, 4);

      stk.push(5);

      const peek = stk.peek();

      expect(peek).toBe(5);
      expect(stk.size).toBe(5);
    });
  });
  describe("pop", () => {
    it("should return null if the stack is empty", () => {
      const stk = new Stack<number>();

      const pop = stk.pop();

      expect(pop).toBeNull();
    });
    it("should remove the last pushed element from the stack and return it", () => {
      const stk = new Stack<number>(1, 2, 3, 4);

      expect(stk.size).toBe(4);

      const pop = stk.pop();

      expect(pop).toBe(4);
      expect(stk.size).toBe(3);
    });
    it("should return last element on the stack and stack become empty", () => {
      const stk = new Stack<number>(1);

      expect(stk.size).toBe(1);

      const pop = stk.pop();

      expect(pop).toBe(1);
      expect(stk.size).toBe(0);
      expect(stk.hasData()).toBe(false);
    });
  });
  describe("peek", () => {
    it("should return null if the stack is empty", () => {
      const stk = new Stack<number>();

      const peek = stk.peek();

      expect(peek).toBeNull();
    });
    it("should return the last pushed element on the stack", () => {
      const stk = new Stack<number>(1, 2, 3);

      const peek = stk.peek();

      expect(peek).toBe(3);
    });
  });
  describe("hasData", () => {
    it("should return false if the stack is empty", () => {
      const stk = new Stack<number>();

      const boolVal = stk.hasData();
      expect(boolVal).toBe(false);
    });
    it("should return true if stack still have data", () => {
      const stk = new Stack<number>(1, 2, 3);

      const boolVal = stk.hasData();
      expect(boolVal).toBe(true);
    });
  });
});
