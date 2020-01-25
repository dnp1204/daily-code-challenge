/**
 * Company: Lyft.
 *
 * Given a list of integers and a number K, return which contiguous elements
 * of the list sum to K. For example, if the list is [1, 2, 3, 4, 5] and K is
 * 9, then it should return [2, 3, 4].
 */
var subarraySum = function(nums, k) {
  const preSum = { 0: 1 };
  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (preSum[sum - k]) {
      result += preSum[sum - k];
    }
    preSum[sum] = (preSum[sum] || 0) + 1;
  }

  return result;
};
