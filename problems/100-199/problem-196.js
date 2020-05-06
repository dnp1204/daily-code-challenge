/**
 * Company: Apple.
 *
 * Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node
 * is the sum of all values under a node, including the node itself.
 *
 * For example, given the following tree:
 *
 *   5
 *  / \
 * 2  -5
 *
 * Return 2 as it occurs twice: once as the left leaf, and once as the sum of 2 + 5 - 5.
 *
 * Leetcode: https://leetcode.com/problems/most-frequent-subtree-sum/description/
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const map = {};
  const ans = [];
  let max = 1;

  const helper = function(node) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      map[node.val] ? map[node.val]++ : (map[node.val] = 1);
      max = Math.max(max, map[node.val]);
      return node.val;
    }

    const sum = node.val + helper(node.left) + helper(node.right);
    map[sum] ? map[sum]++ : (map[sum] = 1);
    max = Math.max(max, map[sum]);

    return sum;
  };

  helper(root);

  for (const key of Object.keys(map)) {
    if (map[key] === max) {
      ans.push(parseInt(key));
    }
  }

  return ans;
};
