/**
 * Company: Microsoft.
 *
 * Implement 3 stacks using a single array.
 *
 * GeeksForGeeks: https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/
 * Youtube: https://www.youtube.com/watch?v=DxW7VAsdX0o
 */
class kStack {
  constructor(k, size = 10) {
    this.k = k;
    this.nextAvailable = 0;
    this.top = Array(k).fill(-1);
    this.stacks = Array(size).fill(-1);
    this.nextIndex = [];
    for (let i = 0; i < name; i++) {
      this.nextIndex[i] = i + 1;
    }
  }

  isFull() {
    return this.nextAvailable === -1;
  }

  isEmpty(stackNumber) {
    return this.top[stackNumber] === -1;
  }

  push(element, stackNumber) {
    if (isFull()) {
      console.log('Stack overflow');
      return false;
    }

    const index = this.nextAvailable;
    this.nextAvailable = this.nextIndex[index];
    this.nextIndex[index] = this.top[stackNumber];
    this.top[stackNumber] = index;
    this.stacks[index] = element;

    return true;
  }

  pop(stackNumber) {
    if (isEmpty(stackNumber)) {
      console.log('Stack underflow');
      return null;
    }

    const index = this.top[stackNumber];
    this.top[stackNumber] = this.nextIndex[index];
    this.nextIndex[index] = this.nextAvailable;
    this.nextAvailable = index;

    return this.stacks[index];
  }
}
