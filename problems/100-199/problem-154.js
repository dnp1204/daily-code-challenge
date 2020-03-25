/**
 * Company: Amazon.
 *
 * Implement a stack API using only a heap. A stack implements the following methods:
 * push(item), which adds an element to the stack
 * pop(), which removes and returns the most recently added element (or throws an
 * error if there is nothing on the stack)
 *
 * Recall that a heap has the following operations:
 * push(item), which adds a new key to the heap
 * pop(), which removes and returns the max value of the heap
 */
const PriorityQueue = require('../libraries/PriorityQueue');

class StackElement {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.priorityQueue = new PriorityQueue([], (a, b) => {
      return b.key - a.key;
    });
    this.order = 1;
  }

  push(item) {
    const stackElement = new StackElement(this.order++, item);
    this.priorityQueue.push(stackElement);
  }

  pop() {
    if (this.priorityQueue.length) {
      return this.priorityQueue.pop().value;
    }

    return null;
  }
}
