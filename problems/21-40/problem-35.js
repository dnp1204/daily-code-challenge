/**
 * Company: Apple.
 *
 * Implement a queue using two stacks. Recall that a queue is a FIFO
 * (first-in, first-out) data structure with the following methods:
 * enqueue, which inserts an element into the queue, and dequeue,
 * which removes it.
 */
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (!this.stack1.length && !this.stack2.length) return null;
    if (this.stack2.length) return this.stack2.pop();
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}
