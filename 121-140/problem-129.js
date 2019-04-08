/**
 * Company: Google.
 *
 * Given an array of integers, return a new array where each element in the new array
 * is the number of smaller elements to the right of that element in the original
 * input array.
 *
 * For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:
 * There is 1 smaller element to the right of 3
 * There is 1 smaller element to the right of 4
 * There are 2 smaller elements to the right of 9
 * There is 1 smaller element to the right of 6
 * There are no smaller elements to the right of 1
 *
 * Leetcode: https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 */
const AVLTree = require('../libraries/AVLTree');

var countSmaller = function(nums) {
  const tree = new AVLTree();
  const countSmaller = [];

  for (i = 0; i < nums.length; i++) {
    countSmaller[i] = 0;
  }

  for (i = nums.length - 1; i >= 0; i--) {
    tree.insert(nums[i], countSmaller, i);
  }

  return countSmaller;
};

console.log(countSmaller([3, 4, 9, 6, 1]));
