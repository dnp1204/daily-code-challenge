/**
 * Company: Google.
 *
 * Given the head of a singly linked list, reverse it in-place
 */
var reverseList = function(head) {
  return helperRecursive(head, null);
};

function helperRecursive(head, previous) {
  if (!head) return previous;
  const next = head.next;
  head.next = previous;
  previous = head;
  return helperRecursive(next, previous);
}

function helperIterative(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
