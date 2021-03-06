/**
 *  Company: LinkedIn.
 *
 * Determine whether a tree is a valid binary search tree.
 *
 * A binary search tree is a tree with two children, left and right, and satisfies the
 * constraint that the key in the left child must be less than or equal to the root and
 * the key in the right child must be greater than or equal to the root.
 *
 * Leetcode: https://leetcode.com/problems/validate-binary-search-tree/
 */
var isValidBST = function(root) {
  const helper = function(node, min, max) {
    if (!node) return true;
    if (min >= node.val || max <= node.val) return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root, -Infinity, Infinity);
};
