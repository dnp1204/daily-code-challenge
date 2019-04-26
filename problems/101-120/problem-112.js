/**
 * Company: Google.
 *
 * Given the head of a singly linked list, swap every two nodes
 * and return its head.
 *
 * For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.
 *
 * Leetcode: https://leetcode.com/problems/swap-nodes-in-pairs/
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let current = head.next;
  head = current;

  while (true) {
    let next = current.next;
    current.next = prev;

    if (!next || !next.next) {
      prev.next = next;
      break;
    }

    prev.next = next.next;
    prev = next;
    current = prev.next;
  }

  return head;
};
