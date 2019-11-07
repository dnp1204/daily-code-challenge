/**
 * Company: Goldman Sachs.
 *
 * Given a list of numbers L, implement a method sum(i, j) which returns the sum
 * from the sublist L[i:j] (including i, excluding j).
 *
 * For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]),
 * which is 5.
 *
 * You can assume that you can do some pre-processing. sum() should be optimized
 * over the pre-processing step.
 */
const calculateSum = function(nums, i, j) {
  let total = 0;
  let allSums = [total];

  for (const num of nums) {
    total += num;
    allSums.push(total);
  }

  const leftSum = allSums[i];
  const rightSum = allSums[j];
  return rightSum - leftSum;
};

console.log(calculateSum([1, 2, 3, 4, 5], 1, 3));
