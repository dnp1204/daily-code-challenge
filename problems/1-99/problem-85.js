/**
 * Company: Microsoft.
 *
 * Given a number in the form of a list of digits, return all possible permutations.
 * For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].
 */
var permute = function(nums) {
  let result = [];

  var helper = function(nums, current = []) {
    if (nums.length === 0) {
      result.push(current);
      return result;
    }
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
      helper(newNums, [...current, nums[i]]);
    }
  };

  helper(nums);
  return result;
};
