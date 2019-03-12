/**
 * Company: Microsoft.
 *
 * Given an array of numbers, find the length of the longest increasing subsequence
 * in the array. The subsequence does not necessarily have to be contiguous.
 *
 * For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
 * the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
 *
 * Youtube link: https://www.youtube.com/watch?v=CE2b_-XfVDk
 */
var lengthOfLIS = function(nums) {
  // return iterationHelper(nums);
  // return recursionHelper(nums);
  return dpHelper(nums);
};

const iterationHelper = function(nums) {
  if (nums.length === 0) return 0;
  let max = 1;
  const temp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        temp[i] = Math.max(temp[i], temp[j] + 1);
        if (max < temp[i]) {
          max = temp[i];
        }
      }
    }
  }
  return max;
};

const recursionHelper = function(nums) {
  let temp,
    max = 0;

  const helper = function(nums, n) {
    if (n == 0) return 1;

    let max = 1,
      temp;
    for (let i = 0; i < n; i++) {
      if (nums[i] < nums[n]) {
        temp = 1 + helper(nums, i);
        if (temp > max) {
          max = temp;
        }
      }
    }

    return max;
  };

  for (let i = 0; i < nums.length; i++) {
    temp = helper(nums, i);
    if (max < temp) {
      max = temp;
    }
  }

  return max;
};

const dpHelper = function(nums) {
  if (nums.length === 0) return 0;

  const tailTable = [];
  let len = 0;

  tailTable[0] = nums[0];
  len = 1;

  const ceilIndex = function(A, l, r, key) {
    while (r - l > 1) {
      const m = Math.floor((l + r) / 2);
      if (A[m] >= key) {
        r = m;
      } else {
        l = m;
      }
    }

    return r;
  };

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < tailTable[0]) {
      tailTable[0] = nums[i];
    } else if (nums[i] > tailTable[len - 1]) {
      tailTable[len] = nums[i];
      len += 1;
    } else {
      const index = ceilIndex(tailTable, -1, len - 1, nums[i]);
      tailTable[index] = nums[i];
    }
  }

  console.log(tailTable);

  return len;
};
