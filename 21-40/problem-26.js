/**
 * Company: Google.
 *
 * Given a singly linked list and an integer k, remove the kth last
 * element from the list. k is guaranteed to be smaller than the length
 * of the list.
 *
 * The list is very long, so making more than one pass is prohibitively
 * expensive.
 *
 * Do this in constant space and in one pass.
 */
const traverse = (head, n) => {
  let node = head;
  for (let i = 1; i < n; i++) {
    node = node.next;
  }
  return node;
};

var removeNthFromEnd = function(head, n) {
  let left = head;
  let right = traverse(head, n);

  // if already reach the end, return directly
  if (right.next === null) {
    return head.next;
  }
  right = right.next;

  // keep pointer to previous of element to be deleted
  while (right.next !== null) {
    left = left.next;
    right = right.next;
  }
  // remove that element
  let next_node = left.next.next;
  left.next = next_node;
  return head;
};
