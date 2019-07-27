/**
 * Company: Amazon.
 *
 * Given an integer N, construct all possible binary search trees with N nodes.
 *
 * Leetcode: https://leetcode.com/problems/unique-binary-search-trees/
 */
var generateTrees = function(n) {
  if (n === 0) return [];
  const nums = [];
  const result = [];

  for (let i = 1; i <= n; i++) nums.push(i);

  const helper = function(nums, memo = {}) {
    if (nums.length === 0) return [null];
    if (memo[nums.join(' ')]) return memo[nums.join(' ')];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      const lefts = helper(nums.slice(0, i), memo);
      const rights = helper(nums.slice(i + 1), memo);
      for (const left of lefts) {
        for (const right of rights) {
          const node = new TreeNode(nums[i]);
          node.left = left;
          node.right = right;
          result.push(node);
        }
      }
    }

    memo[nums.join(' ')] = result;

    return result;
  };

  return helper(nums);
};
