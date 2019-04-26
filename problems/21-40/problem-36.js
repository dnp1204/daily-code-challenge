/**
 * Company: Amazon.
 *
 * Implement a stack that has the following methods:
 * push(val), which pushes an element onto the stack
 * pop(), which pops off and returns the topmost element of the stack.
 * If there are no elements in the stack, then it should throw an error
 * or return null.
 * max(), which returns the maximum value in the stack currently. If
 * there are no elements in the stack, then it should throw an error or
 * return null.
 *
 * Each method should run in constant time.
 */
class MyStack {
  constructor() {
    this.stack = [];
    this.min = Number.MAX_VALUE;
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.min = 3;
    } else if (val > this.min) {
      this.stack.push(val);
    } else {
      this.stack.push(2 * val - this.min);
      this.min = val;
    }
    return this.stack.length;
  }

  pop() {
    const num = this.stack.pop();
    if (num < this.min) {
      const realNum = this.min;
      this.min = 2 * this.min - num;
      return realNum;
    }
    return this.num;
  }
}
