/**
 * Company: Airbnb.
 *
 * Given a list of integers, write a function that returns the largest
 * sum of non-adjacent numbers. Numbers can be 0 or negative.
 *
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6,
 * and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 *
 * Follow-up: Can you do this in O(N) time and constant space?
 */
function findMaxNonAdjacent(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];
  let max = Math.max(nums[0], nums[1]);
  let mem = [nums[0], nums[1]];

  for (let i = 2; i < nums.length; i++) {
    mem[i] = nums[i] + mem[i - 2];
    if (i > 2) {
      mem[i] = Math.max(mem[i], nums[i] + mem[i - 3]);
    }
    max = Math.max(mem[i], max);
  }
  return max;
}

function findMaxNonAdjacent2(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];
  let include = nums[0];
  let exclude = 0;

  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(include, exclude);

    include = exclude + nums[i];
    exclude = temp;
  }

  return Math.max(include, exclude);
}

console.log(findMaxNonAdjacent([5, 1, 1, 5]), 10);
console.log(findMaxNonAdjacent([1, 5, 1, 5, 6]), 11);
console.log(findMaxNonAdjacent([2, 4, 6, 2, 5]), 13);
console.log(findMaxNonAdjacent([1, 20, 3]), 20);
console.log(findMaxNonAdjacent([5, 5, 10, 100, 10, 5]), 110);
console.log(findMaxNonAdjacent([3, 2, 5, 10, 7]), 15);
console.log(findMaxNonAdjacent([5, 5, 10, 40, 50, 35]), 80);
console.log();
console.log(findMaxNonAdjacent2([5, 1, 1, 5]), 10);
console.log(findMaxNonAdjacent2([1, 5, 1, 5, 6]), 11);
console.log(findMaxNonAdjacent2([2, 4, 6, 2, 5]), 13);
console.log(findMaxNonAdjacent2([1, 20, 3]), 20);
console.log(findMaxNonAdjacent2([5, 5, 10, 100, 10, 5]), 110);
console.log(findMaxNonAdjacent2([3, 2, 5, 10, 7]), 15);
console.log(findMaxNonAdjacent2([5, 5, 10, 40, 50, 35]), 80);
