/**
 * Company: Google.
 *
 * A unival tree (which stands for 'universal value') is a tree where
 * all nodes under it have the same value.
 * Given the root to binary tree, count the number of unival subtrees
 *
 * For example, the following tree has 5 unival subtrees:
 *          0
 *         / \
 *        1   0
 *           / \
 *          1   0
 *         / \
 *        1   1
 */
function countUnivalSubtrees(root) {
  let count = 0;

  const helper = function(root) {
    if (!root) return true;
    if (!helper(root.left) || !helper(root.right)) return false;
    if (root.left && root.value !== root.left.value) return false;
    if (root.right && root.value !== root.right.value) return false;
    count++;
    return true;
  };

  return count;
}
