/**
 * Company: Amazon.
 *
 * There exists a staircase with N steps, and you can climb up
 * either 1 or 2 steps at a time. Given N, write a function that
 * returns the number of unique ways you can climb the staircase.
 * The order of the steps matters.
 *
 * For example, if N is 4, then there are 5 unique ways:
 * 1, 1, 1, 1
 * 2, 1, 1
 * 1, 2, 1
 * 1, 1, 2
 * 2, 2
 *
 * What if, instead of being able to climb 1 or 2 steps at a time,
 * you could climb any number from a set of positive integers X?
 * For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at
 * a time.
 *
 * Leetcode: https://leetcode.com/problems/climbing-stairs/
 */
var climbStairs = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let nums = [];
  nums[0] = 1;
  nums[1] = 1;

  for (let i = 2; i <= n; i += 1) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  return nums[nums.length - 1];
};

var climbStairsX = function(n, steps) {
  if (n === 0) return 1;
  let nums = [];
  nums[0] = 1;

  for (let i = 1; i < n; i++) {
    let total = 0;
    for (const step of steps) {
      if (i >= step) total += nums[i - step];
    }
    nums[i] = total;
  }
  return nums[nums.length - 1];
};
