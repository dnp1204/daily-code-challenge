/**
 * Company: Amazon.
 *
 * A tree is symmetric if its data and shape remain unchanged when it is reflected about
 * the root node.
 *
 * Given a k-ary tree, determine whether it is symmetric.
 *
 * Leetcode: https://leetcode.com/problems/symmetric-tree/
 */
var isSymmetric = function(root) {
  return helper(root, root);
};

function helper(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }

  if (!node1 || !node2) {
    return false;
  }

  return (
    node1.val === node2.val &&
    helper(node1.left, node2.right) &&
    helper(node1.right, node2.left)
  );
}
