/**
 * Company: Google.
 *
 * Given a list of integers S and a target number k, write a function
 * that returns a subset of S that adds up to k. If such a subset cannot
 * be made, then return null.
 *
 * Integers can appear more than once in the list. You may assume all
 * numbers in the list are positive.
 *
 * For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return
 * [12, 9, 2, 1] since it sums up to 24.
 */
const findSubsetSum = function(nums, k) {
  const table = [];

  for (let i = 0; i < nums.length; i++) {
    table[i] = [];
    for (let j = 0; j <= k; j++) {
      table[i][j] = false;
      if (j === 0) {
        table[i][0] = true;
      }
    }
  }

  for (let i = 0; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (nums[i] === j) {
        table[i][j] = true;
      } else if (j > nums[i] && i > 0 && table[i - 1][j - nums[i]]) {
        table[i][j] = true;
      } else if (i > 0 && table[i - 1][j]) {
        table[i][j] = true;
      }
    }
  }

  const result = [];
  let i = nums.length - 1;
  let j = k;
  let sum = k;

  while (i >= 0 && j >= 0 && sum >= 0) {
    if (sum === nums[i]) {
      result.push(sum);
      break;
    } else if (j >= nums[i] && table[i - 1][j - nums[i]]) {
      result.push(nums[i]);
      sum -= nums[i];
      j = j - nums[i];
      i--;
    } else if (table[i - 1][j]) {
      i = i - 1;
    }
  }
  return result;
};

console.log(findSubsetSum([1, 5, 2], 3));
console.log(findSubsetSum([12, 1, 61, 5, 9, 2], 7));
console.log(findSubsetSum([2, 3, 7, 8, 10], 11));
console.log(findSubsetSum([2, 3, 7, 8, 10], 12));
console.log(findSubsetSum([12, 1, 61, 5, 9, 2], 24));
