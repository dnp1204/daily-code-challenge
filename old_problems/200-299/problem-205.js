/**
 * Company: IBM.
 *
 * Given an integer, find the next permutation of it in absolute order. For example,
 * given 48975, the next permutation would be 49578.
 *
 * Leetcode: https://leetcode.com/problems/next-permutation/
 */
var nextPermutation = function(nums) {
  if (nums.length < 2) return nums;
  const n = nums.length;
  let i = n - 1;
  for (; i > 0; i--) if (nums[i] > nums[i - 1]) break;

  if (i === 0) {
    nums.reverse();
  } else if (i === n - 1) {
    swap(nums, n - 1, i - 1);
  } else {
    const val = nums[i - 1];
    let j = n - 1;

    while (j >= i) {
      if (nums[j] > val) break;
      j--;
    }

    swap(nums, i - 1, j);

    let start = i;
    let end = n - 1;

    for (let index = start; index <= Math.floor((start + end) / 2); index++) {
      swap(nums, index, start + end - index);
    }
  }
};

function swap(nums, index1, index2) {
  let temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}
