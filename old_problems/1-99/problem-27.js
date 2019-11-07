/**
 * Company: Google.
 *
 * Given k sorted singly linked lists, write a function to merge all the
 * lists into one sorted singly linked list.
 *
 * Leetcode: https://leetcode.com/problems/merge-k-sorted-lists/
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  let stack = lists.filter(list => list != null);
  if (stack.length === 0) return null;
  if (stack.length === 1) return lists[0];

  const mergeTwoLists = function(l1, l2) {
    let newHead = null,
      current = null;

    if (l1 && l2) {
      if (l1.val < l2.val) {
        newHead = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        newHead = new ListNode(l2.val);
        l2 = l2.next;
      }
    } else if (l1) {
      newHead = new ListNode(l1.val);
      l1 = l1.next;
    } else if (l2) {
      newHead = new ListNode(l2.val);
      l2 = l2.next;
    }

    current = newHead;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        current.next = new ListNode(l2.val);
        l2 = l2.next;
      }
      current = current.next;
    }

    while (l1) {
      current.next = new ListNode(l1.val);
      current = current.next;
      l1 = l1.next;
    }

    while (l2) {
      current.next = new ListNode(l2.val);
      current = current.next;
      l2 = l2.next;
    }

    return newHead;
  };

  while (stack.length >= 2) {
    const nextNodeList = [];
    for (let i = 0; i < stack.length; i = i + 2) {
      if (i + 1 < stack.length) {
        nextNodeList.push(mergeTwoLists(stack[i], stack[i + 1]));
      } else {
        nextNodeList.push(stack[i]);
      }
    }
    stack = nextNodeList;
  }

  return stack[0];
};
