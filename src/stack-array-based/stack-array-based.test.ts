import { Stack } from "./stack-array-based";

describe("Stack Array Based LIFO", () => {
  describe("push", () => {
    it("should push data on top of the stack", () => {
      const stk = new Stack<number>(1, 2, 3, 4);

      stk.push(5);
      expect(stk.peek()).toBe(5);
      expect(stk.hasData()).toBe(true);
    });
  });
  describe("pop", () => {
    it("should return null if stack is empty", () => {
      const stk = new Stack<number>();

      expect(stk.pop()).toBeNull();
    });
    it("should remove item from top of the stack and return it", () => {
      const stk = new Stack<number>(1, 2, 3, 4);

      expect(stk.pop()).toBe(4);
      expect(stk.size).toBe(3);
    });
  });
  describe("peek", () => {
    it("should return null if stack is empty", () => {
      const stk = new Stack<number>();

      expect(stk.peek()).toBeNull();
    });
    it("should return data from the top of the stack", () => {
      const stk = new Stack<number>(1, 2, 3, 4);
      expect(stk.peek()).toBe(4);
    });
  });
  describe("hasData", () => {
    it("should return false if stack is empty", () => {
      const stk = new Stack<number>();

      expect(stk.hasData()).toBe(false);
    });
    it("should return true if stack has data", () => {
      const stk = new Stack<number>(1, 2, 3);

      expect(stk.hasData()).toBe(true);
    });
  });
});
