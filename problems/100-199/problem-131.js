/**
 * Company: Snapchat.
 *
 * Given the head to a singly linked list, where each node also has a “random”
 * pointer that points to anywhere in the linked list, deep clone the list.
 *
 * Leetcode: https://leetcode.com/problems/copy-list-with-random-pointer/
 */
var copyRandomList = function(head) {
  if (!head) return head;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = new Node(current.val, next, null);
    current = next;
  }

  current = head;
  while (current) {
    if (current.random) current.next.random = current.random.next;
    current = current.next.next;
  }

  current = head;
  const copyHead = head.next;

  while (current) {
    const next = current.next.next;
    const copy = current.next;
    current.next = next;
    if (next) {
      copy.next = next.next;
    }
    current = next;
  }

  return copyHead;
};
