/**
 * Company: Microsoft.
 *
 * Let's represent an integer in a linked list format by having each node
 * represent a digit in the number. The nodes make up the number in reversed
 * order.
 *
 * For example, the following linked list:
 * 1 -> 2 -> 3 -> 4 -> 5 is the number 54321.
 *
 * Given two linked lists in this format, return their sum in the same linked
 * list format.
 *
 * For example, given
 * 9 -> 9
 * 5 -> 2
 * return 124 (99 + 25) as:
 * 4 -> 2 -> 1
 */
var addTwoNumbers = function(l1, l2) {
  let remainder = 0;
  let head = null;
  let current = null;

  while (l1 && l2) {
    const total = l1.val + l2.val + remainder;
    if (total > 9) {
      remainder = 1;
    } else {
      remainder = 0;
    }

    if (head) {
      current.next = new ListNode(total % 10);
      current = current.next;
    } else {
      head = new ListNode(total % 10);
      current = head;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    const value = l1.val + remainder;
    if (value > 9) {
      remainder = 1;
    } else {
      remainder = 0;
    }
    current.next = new ListNode(value % 10);
    current = current.next;
    l1 = l1.next;
  }

  while (l2) {
    const value = l2.val + remainder;
    if (value > 9) {
      remainder = 1;
    } else {
      remainder = 0;
    }
    current.next = new ListNode(value % 10);
    current = current.next;
    l2 = l2.next;
  }

  if (remainder === 1) {
    current.next = new ListNode(1);
  }

  return head;
};
