/**
 * Company: Amazon.
 *
 * Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
 *
 * For example, for the input [1, 2, 3, 10], you should return 7.
 *
 * Do this in O(N) time.
 *
 * GeeksForGeeks: https://www.geeksforgeeks.org/find-smallest-value-represented-sum-subset-given-array/
 */
// TODO:
const findMissingInteger = function(nums) {
  let res = 1;

  for (let i = 0; i < nums.length && nums[i] <= res; i++) {
    res = res + nums[i];
  }

  return res;
};

console.log(findMissingInteger([1, 2, 3, 10]));
console.log(findMissingInteger([1, 3, 6, 10, 11, 15]));
console.log(findMissingInteger([1, 1, 1, 1]));
console.log(findMissingInteger([1, 1, 3, 4]));
console.log(findMissingInteger([1, 2, 5, 10, 20, 40]));
console.log(findMissingInteger([1, 2, 3, 4, 5, 6]));
