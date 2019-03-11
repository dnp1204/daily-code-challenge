/**
 * Company: Google.
 *
 * The power set of a set is the set of all its subsets.
 * Write a function that, given a set, generates its power
 * set.
 *
 * For example, given the set {1, 2, 3}, it should return
 * {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
 *
 * You may also use a list or array to represent a set.
 *
 * Leetcode: https://leetcode.com/problems/subsets/
 */
var subsets = function(nums) {
  const result = [[]];
  if (nums.length === 0) return result;
  const map = {};
  const helper = function(nums) {
    if (!map[nums.join('')]) {
      result.push(nums);
      map[nums.join('')] = nums;
    }
    if (nums.length === 1) return nums;
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
      helper(newNums);
    }
    return result;
  };
  return helper(nums);
};

var subsets2 = function(nums) {
  const result = [[]];
  for (const num of nums) {
    const length = result.length;
    for (let i = 0; i < length; i++) {
      result.push(result[i].concat(num));
    }
  }
  return result;
};
