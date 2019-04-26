/**
 * Company: Airbnb.
 *
 * Given a linked list and a positive integer k, rotate the list to the right by k places.
 *
 * For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.
 * Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.
 *
 * Leetcode: https://leetcode.com/problems/rotate-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null;

  let end = head;
  let current = head;
  let length = 1;

  while (end.next) {
    end = end.next;
    length++;
  }

  for (let i = length - (k % length); i > 1; i--) current = current.next;

  end.next = head;
  head = current.next;
  current.next = null;

  return head;
};
