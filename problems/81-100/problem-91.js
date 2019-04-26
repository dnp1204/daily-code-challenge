/**
 * Company: Google.
 *
 * Given a sorted list of integers, square the elements and give the output in sorted order.
 * For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
 */
function squareAndSort(nums = []) {
  const result = [];
  let k = 0;
  for (k; k < nums.length; k += 1) {
    if (nums[k] >= 0) {
      break;
    }
  }

  let i = k,
    j = k + 1;

  while (i >= 0 && j < nums.length) {
    const left = nums[i] * nums[i];
    const right = nums[j] * nums[j];

    if (left > right) {
      result.push(right);
      j++;
    } else {
      result.push(left);
      i--;
    }
  }

  while (i >= 0) {
    result.push(nums[i] * nums[i]);
    i--;
  }

  while (j < nums.length) {
    result.push(nums[j] * nums[j]);
    j++;
  }

  return result;
}

squareAndSort([-9, -2, -1, 0, 2, 3]);
