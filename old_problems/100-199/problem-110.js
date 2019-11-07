/**
 * Company: Amazon.
 *
 * Given a pivot x, and a list lst, partition the list into three parts.
 * The first part contains all elements in lst that are less than x
 * The second part contains all elements in lst that are equal to x
 * The third part contains all elements in lst that are larger than x
 * Ordering within a part can be arbitrary.
 *
 * For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one
 * partition may be `[9, 3, 5, 10, 10, 12, 14].
 */
function partition(nums, x) {
  let start = 0;
  let end = nums.length - 1;

  for (let i = 0; i <= end; i++) {
    if (nums[i] < x) {
      if (start !== i) {
        const temp = nums[i];
        nums[i] = nums[start];
        nums[start] = temp;
      }
      start++;
    } else if (nums[i] > x) {
      if (end !== i) {
        const temp = nums[i];
        nums[i] = nums[end];
        nums[end] = temp;
        end--;
      }
    }
  }
  return nums;
}

console.log(partition([10, 8, 9, 1, 10, 12, 10, 3, 5, 14, 10], 10));
console.log(partition([9, 12, 10, 3, 5, 14, 10, 10], 10));
