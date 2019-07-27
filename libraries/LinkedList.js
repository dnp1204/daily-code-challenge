class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  delete(val) {
    let current = this.head;
    let prev = null;

    while (current && current.val !== val) {
      prev = current;
      current = current.next;
    }

    if (!current) return false;
    if (current === this.head) this.head = current.next;
    else prev.next = current.next;

    return true;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
  }

  toString() {
    let result = [];
    let current = this.head;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result.join(' -> ');
  }
}

module.exports = { LinkedList, Node };
