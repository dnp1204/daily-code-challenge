/**
 * Company: Google.
 *
 * Given the sequence of keys visited by a post-order traversal of a binary search tree,
 * reconstruct the tree.
 *
 * For example, given the sequence 2, 4, 3, 8, 7, 5, you should construct the following tree:
 *
 *     5
 *    / \
 *   3   7
 *  / \   \
 * 2   4   8
 */
const { TreeNode } = require('../libraries/Tree');

const constructTree = function(nums) {
  let index = nums.length - 1;

  const helper = function(key, min, max) {
    if (index < 0) return null;
    let root = null;

    if (key > min && key < max) {
      root = new TreeNode(key);

      if (index - 1 >= 0) {
        index -= 1;
        root.right = helper(nums[index], key, max);
        root.left = helper(nums[index], min, key);
      }
    }

    return root;
  };

  return helper(nums[index], -Infinity, Infinity);
};

console.log(constructTree([2, 4, 3, 8, 7, 5]));
