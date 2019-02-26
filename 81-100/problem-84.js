/**
 * Company: Google.
 *
 * Determine whether a doubly linked list is a palindrome. What if it’s singly linked?
 * For example, 1 -> 4 -> 3 -> 4 -> 1 returns true while 1 -> 4 returns false.
 */
var isPalindrome = function(head) {
  let fast, slow, next;
  fast = slow = head;
  prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;

    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (prev && slow) {
    if (prev.val !== slow.val) return false;
    prev = prev.next;
    slow = slow.next;
  }

  return true;
};
