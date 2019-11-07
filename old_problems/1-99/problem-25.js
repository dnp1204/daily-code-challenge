/**
 * Company: Google.
 *
 * Given two singly linked lists that intersect at some point, find the
 * intersecting node. The lists are non-cyclical.
 *
 * For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10,
 * return the node with value 8.
 *
 * In this example, assume nodes with the same value are the exact same
 * node objects.
 * Do this in O(M + N) time (where M and N are the lengths of the lists)
 * and constant space.
 *
 * Leetcode: https://leetcode.com/problems/intersection-of-two-linked-lists/
 */
var getIntersectionNode2 = function(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA ? (nodeA = nodeA.next) : headB;
    nodeB = nodeB ? (nodeB = nodeB.next) : headA;
  }

  return nodeA;
};

var getIntersectionNode = function(headA, headB) {
  const lengthA = findLength(headA);
  const lengthB = findLength(headB);
  let index = 0,
    currentA = headA,
    currentB = headB;

  if (lengthA > lengthB) {
    while (index < lengthA - lengthB) {
      index += 1;
      currentA = currentA.next;
    }
  } else if (lengthA < lengthB) {
    while (index < lengthB - lengthA) {
      index += 1;
      currentB = currentB.next;
    }
  }

  while (currentA && currentB) {
    if (currentA === currentB) return currentA;
    currentA = currentA.next;
    currentB = currentB.next;
  }

  return null;
};

function findLength(head) {
  let current = head,
    length = 0;
  while (current) {
    length += 1;
    current = current.next;
  }
  return length;
}
