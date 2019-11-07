/**
 * Company: Amazon.
 *
 * Given a linked list, remove all consecutive nodes that sum to zero. Print out the remaining nodes.
 *
 * For example, suppose you are given the input 3 -> 4 -> -7 -> 5 -> -6 -> 6. In this case, you should
 * first remove 3 -> 4 -> -7, then -6 -> 6, leaving only 5.
 */
const removeSumZero = function(head) {
  let start = head;
  let prev = null;

  while (start) {
    let current = start;
    let sum = 0;
    while (current) {
      sum += current.val;
      if (sum === 0) {
        if (!prev) {
          head = current.next;
        } else {
          prev.next = current.next;
        }
        start = current;
        break;
      }
      current = current.next;
    }

    prev = start;
    if (start) {
      start = start.next;
    }
  }

  return head;
};

const { LinkedList } = require('../../libraries/LinkedList');
const list = new LinkedList();
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(-7);
list.insert(5);
list.insert(-6);
list.insert(6);
removeSumZero(list.head);
console.log(list.toString());
