/**
 * Company: Facebook.
 *
 * You have a large array with most of the elements as zero.
 * Use a more space-efficient data structure, SparseArray,
 * that implements the same interface:
 * init(arr, size): initialize with the original large array and size.
 * set(i, val): updates index at i with val.
 * get(i): gets the value at index i.
 */
class SparseArray {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  init(arr, size) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      if (arr[i] !== 0) {
        this.storage[i] = arr[i];
      }
    }
  }

  get(i) {
    if (this.storage[i]) return this.storage[i];
    if (i < this.size - 1) return 0;
    return -1;
  }

  set(i, val) {
    if (val) {
      this.storage[i] = val;
    }
    return true;
  }
}
