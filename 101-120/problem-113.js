/**
 * Company: BufferBox.
 *
 * Given a binary tree where all nodes are either 0 or 1, prune the tree
 * so that subtrees containing all 0s are removed.
 *
 * For example, given the following tree:
 *
 *   0
 *  / \
 * 1   0
 *    / \
 *   1   0
 *  / \
 * 0   0
 * should be pruned to:
 *
 *   0
 *  / \
 * 1   0
 *    /
 *   1
 * We do not remove the tree at the root or its left child because it still
 * has a 1 as a descendant.
 *
 * Leetcode: https://leetcode.com/problems/binary-tree-pruning
 */
var pruneTree = function(root) {
  const helper = function(root) {
    if (!root || (!root.left && !root.right && root.val === 0)) return null;

    root.left = helper(root.left);
    root.right = helper(root.right);

    if (!root.left && !root.right && root.val === 0) return null;

    return root;
  };

  return helper(root);
};
