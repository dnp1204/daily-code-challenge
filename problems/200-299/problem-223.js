/**
 * Company: Palantir.
 *
 * Typically, an implementation of in-order traversal of a binary tree has O(h) space complexity,
 * where h is the height of the tree. Write a program to compute the in-order traversal of a
 * binary tree using O(1) space.
 *
 * Leetcode: https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length) {
    let node = stack[stack.length - 1];

    while (node && node.left) {
      stack.push(node.left);
      node = node.left;
    }

    while (stack.length) {
      node = stack.pop();
      result.push(node.val);

      if (node.right) {
        stack.push(node.right);
        break;
      }
    }
  }

  return result;
};
