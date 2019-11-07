/**
 * Company: Etsy.
 *
 * Given a sorted array, convert it into a height-balanced binary search tree.
 *
 * Leetcode: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length);
};

function helper(nums, start, end) {
  if (start >= end) {
    return null;
  }

  const middle = start + Math.floor((end - start) / 2);
  const root = new TreeNode(nums[middle]);
  root.left = helper(nums, start, middle);
  root.right = helper(nums, middle + 1, end);
  return root;
}
