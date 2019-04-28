/**
 * Company: Uber.
 *
 * Implement a 2D iterator class. It will be initialized with an array of arrays,
 * and should implement the following methods:
 * next(): returns the next element in the array of arrays. If there are no more
 * elements, raise an exception.
 * has_next(): returns whether or not the iterator still has elements left.
 *
 * For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next()
 * repeatedly should output 1, 2, 3, 4, 5, 6.
 *
 * Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.
 */
class Iterator {
  constructor(arr) {
    this.arr = arr;
    this.current = [];
    this._init();
  }

  _helper(arr) {
    if (!arr.length) {
      if (!this.arr.length) return [];
      return this._helper(this.arr.shift());
    }

    if (Array.isArray(arr[0])) return this._helper(arr[0]);

    return arr;
  }

  _init() {
    if (this.arr.length) {
      this.current = this._helper(this.arr.shift());
    }
  }

  next() {
    if (!this.arr.length) throw new Error('No more elements');
    if (this.current.length) {
      const element = this.current.shift();
      if (this.current.length === 0) {
        this._init();
      }
      return element;
    }
    this._init();
    this.next();
  }

  hasNext() {
    return this.current.length !== 0;
  }
}

const iterator = new Iterator([
  [1, 2],
  [3],
  [],
  [4, 5, 6],
  [[7, 8, 9]],
  [[[[]]]]
]);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
