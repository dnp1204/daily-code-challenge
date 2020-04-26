/**
 * Company: Microsoft.
 *
 * Given an array of positive integers, divide the array into two subsets such that the difference
 * between the sum of the subsets is as small as possible.
 *
 * For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a
 * difference of 5, which is the smallest possible difference.
 */
const createMinDiffSub = function(nums = []) {
  const sum = nums.reduce((acc, ele) => acc + ele);
  const n = nums.length;
  const table = [];
  const visited = {};
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i <= n; i++) {
    table[i] = [];
    for (let j = 0; j <= sum; j++) {
      table[i][j] = false;
    }
    table[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      table[i][j] = table[i - 1][j];

      if (j >= nums[i - 1]) {
        table[i][j] = table[i - 1][j - nums[i - 1]];
      }
    }
  }

  let i = n;
  let j = Math.floor((sum + 1) / 2);

  while (i > 0 && j > 0) {
    if (table[i][j]) {
      arr1.push(nums[i - 1]);
      visited[i - 1] = true;
      const nextSum = j - nums[i - 1];
      j = nextSum;
      i--;
      while (i > 0 && (!table[i][j] || nums[i - 1] > j)) {
        i--;
      }
    } else {
      j--;
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) arr2.push(nums[i]);
  }

  return [arr1, arr2];
};

console.log(createMinDiffSub([1, 3, 1, 1, 2]));
console.log(createMinDiffSub([5, 10, 15, 20, 25]));
console.log(createMinDiffSub([5, 10, 15, 20]));
console.log(createMinDiffSub([1, 6, 11, 5]));
console.log(createMinDiffSub([3, 1, 4, 2, 2, 1]));
console.log(createMinDiffSub([40, 80, 100]));
