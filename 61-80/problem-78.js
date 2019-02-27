/**
 * Company: Facebook.
 *
 * Given a binary tree, return all paths from the root to leaves.
 * For example, given the tree
 *
 *    1
 *   / \
 *  2   3
 *     / \
 *    4   5
 * It should return [[1, 2], [1, 3, 4], [1, 3, 5]].
 */
var binaryTreePaths = function(root) {
  var helper = function(root, path = '', result = []) {
    if (!root) return result;

    if (!root.left && !root.right) {
      result.push(path + root.val);
    }

    if (root.left) {
      helper(root.left, path + root.val + '->', result);
    }

    if (root.right) {
      helper(root.right, path + root.val + '->', result);
    }

    return result;
  };

  return helper(root);
};
