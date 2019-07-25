/**
 * Company: Apple.
 *
 * A fixed point in an array is an element whose value is equal to its index. Given a sorted array
 * of distinct elements, return a fixed point, if one exists. Otherwise, return False.
 *
 * For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return
 * False.
 */
const findFixedPoint = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === middle) return middle;
    if (nums[middle] > middle) right = middle;
    else left = middle + 1;
  }

  return false;
};

console.log(findFixedPoint([1, 5, 7, 8]));
console.log(findFixedPoint([-6, 0, 2, 40]));
console.log(findFixedPoint([0, 2, 5, 8, 17]));
console.log(findFixedPoint([-10, -5, 0, 3, 7]));
console.log(findFixedPoint([-10, -5, 3, 4, 7, 9]));
