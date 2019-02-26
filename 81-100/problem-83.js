/**
 * Company: Microsoft.
 *
 * Given an unsorted array of integers, find the length of the longest consecutive
 * elements sequence.
 *
 * For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence
 * is [1, 2, 3, 4]. Return its length: 4.
 *
 * Your algorithm should run in O(n) complexity.
 */
var longestConsecutive = function(nums) {
  const cached = {};
  let max = 0;
  for (const num of nums) {
    if (!cached[num]) {
      const left = cached[num - 1] || 0;
      const right = cached[num + 1] || 0;
      const sum = left + right + 1;

      cached[num] = sum;
      max = Math.max(cached[num], max);
      cached[num - left] = sum;
      cached[num + right] = sum;
    }
  }
  return max;
};
