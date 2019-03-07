/**
 * Company: Apple.
 *
 * Given a binary tree, find a minimum path sum from root to a leaf.
 *
 * For example, the minimum path in this tree is [10, 5, 1, -1], which
 * has sum 15.
 *
 *    10
 *   /  \
 *  5    5
 *       \
 *       1
 *       /
 *     -1
 */
function findMinSum(root) {
  const helper = function(root, path = '') {
    if (!root) return { val: 0, path };
    if (!root.left && !root.right)
      return { val: root.val, path: `${path} -> ${root.val}` };
    const left = findMinSum(root.left, `${path} -> ${root.val} ->`);
    const right = findMinSum(root.right, `${path} -> ${root.val} ->`);
    if (left.val > right.val) {
      return left;
    }
    return right;
  };

  return helper(root);
}
