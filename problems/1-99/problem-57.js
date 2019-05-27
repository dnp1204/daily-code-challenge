/**
 * Company: Google
 *
 * Given a binary tree of integers, find the maximum path sum between two nodes.
 * The path must go through at least one node, and does not need to go through
 * the root.
 *
 * Leetcode: https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */
var maxPathSum = function(root) {
  let max = -Infinity;
  const helper = function(node) {
    if (!node) return 0;
    const left = helper(node.left);
    const right = helper(node.right);
    const maxLR = Math.max(left, right);
    const maxNodeLR = Math.max(maxLR + node.val, node.val);
    const maxAll = Math.max(maxNodeLR, left + right + node.val);
    const maxPath = Math.max(maxAll, maxNodeLR);
    max = Math.max(max, maxPath);
    return maxNodeLR;
  };
  helper(root);
  return max === -Infinity ? 0 : max;
};
