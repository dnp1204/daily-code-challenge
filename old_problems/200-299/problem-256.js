/**
 * Company: Fitbit.
 *
 * Given a linked list, rearrange the node values such that they appear in alternating
 * low -> high -> low -> high ... form. For example, given 1 -> 2 -> 3 -> 4 -> 5, you
 * should return 1 -> 3 -> 2 -> 5 -> 4.
 */
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

const reorderList = function(list) {
  let current = list.head;
  let next = current.next;

  while (current && next) {
    const nextEle = next.next;
    if (nextEle) {
      current.next = nextEle;
      next.next = nextEle.next;
      nextEle.next = next;
    }
    current = next;
    next = current.next;
  }

  return list;
};

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
console.log(list.toString());
reorderList(list);
console.log(list.toString());

console.log('----------------------------------');

list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
console.log(list.toString());
reorderList(list);
console.log(list.toString());

console.log('----------------------------------');

list = new LinkedList();
list.insert(1);
list.insert(2);
console.log(list.toString());
reorderList(list);
console.log(list.toString());

console.log('----------------------------------');

list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
console.log(list.toString());
reorderList(list);
console.log(list.toString());
