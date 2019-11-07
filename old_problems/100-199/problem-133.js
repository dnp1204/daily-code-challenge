/**
 * Company: Google.
 *
 * Given a linked list, sort it in O(n log n) time and constant space.
 *
 * For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.
 *
 * Leetcode: https://leetcode.com/problems/sort-list/
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
 * @return {ListNode}
 */
var sortList = function(head) {
  return helper(head);
};

const helper = function(head) {
  if (!head || !head.next) return head;

  let fast = head.next,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  const nextHead = slow.next;
  slow.next = null;

  const node1 = helper(head);
  const node2 = helper(nextHead);

  return merge(node1, node2);
};

const merge = function(node1, node2) {
  if (!node1) return node2;
  if (!node2) return node1;

  let head = null,
    node = null;
  if (node1.val < node2.val) {
    head = node1;
    node1 = node1.next;
  } else {
    head = node2;
    node2 = node2.next;
  }

  node = head;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      node.next = node1;
      node1 = node1.next;
    } else {
      node.next = node2;
      node2 = node2.next;
    }
    node = node.next;
  }

  while (node1) {
    node.next = node1;
    node = node.next;
    node1 = node1.next;
  }

  while (node2) {
    node.next = node2;
    node = node.next;
    node2 = node2.next;
  }

  return head;
};
