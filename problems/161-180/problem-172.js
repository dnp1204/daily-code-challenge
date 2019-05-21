/**
 * Company: LinkedIn.
 *
 * Given a linked list of numbers and a pivot k, partition the linked list so that
 * all nodes less than k come before nodes greater than or equal to k.
 *
 * For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the solution
 * could be 1 -> 0 -> 5 -> 8 -> 3.
 *
 * Leetcode: https://leetcode.com/problems/partition-list/
 */
var partition = function(head, x) {
  if (!head) return null;

  let current = head,
    start = head,
    previous = null;

  while (current) {
    while (current && current.val >= x) {
      previous = current;
      current = current.next;
    }

    if (current && current != start) {
      previous.next = current.next;
      current.next = start.next;
      start.next = current;
      start = current;
      current = previous;
    }

    if (!current) break;

    previous = current;
    current = current.next;
  }

  if (head.val >= x && start !== head) {
    const newHead = head.next;
    const next = start.next;
    start.next = head;
    head.next = next;
    return newHead;
  }

  return head;
};
