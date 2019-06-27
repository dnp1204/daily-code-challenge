/**
 * Company: PayPal.
 *
 * Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary
 * tree can be defined as one in which the heights of the two subtrees of any node never differ
 * by more than one.
 *
 * Leetcode: https://leetcode.com/problems/balanced-binary-tree/
 */
var isBalanced = function(root) {
  let result = true;

  var maxDepth = function(root) {
    if (root === null || !result) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    if (Math.abs(left - right) > 1) {
      result = false;
      return 0;
    }

    return 1 + Math.max(left, right);
  };

  maxDepth(root);

  return result;
};
