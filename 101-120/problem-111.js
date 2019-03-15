/**
 * Company: Google.
 *
 * Given an array of numbers and an index i, return the index of the nearest
 * larger number of the number at index i, where distance is measured in array
 * indices.
 *
 * For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.
 *
 * If two distances to larger numbers are the equal, then return any one of
 * them. If the array at i doesn't have a nearest larger integer, then return
 * null.
 *
 * Follow-up: If you can preprocess the array, can you do this in constant time?
 */
function findNextLarger(nums, i) {
  let leftIndex = (rightIndex = result = i);
  let index;

  index = leftIndex;
  while (index < nums.length) {
    if (nums[i] < nums[index]) {
      if (i === leftIndex || nums[leftIndex] > nums[index]) {
        leftIndex = index;
      }
    }
    index++;
  }

  index = rightIndex;
  while (index >= 0) {
    if (nums[i] < nums[index]) {
      if (i === rightIndex || nums[rightIndex] > nums[index]) {
        rightIndex = index;
      }
    }
    index--;
  }

  if (leftIndex !== i && rightIndex !== i) {
    result = nums[leftIndex] < nums[rightIndex] ? leftIndex : rightIndex;
    return result !== i ? result : null;
  } else if (leftIndex === i) {
    return rightIndex;
  }

  return leftIndex;
}

console.log(findNextLarger([4, 1, 3, 5, 6], 0));
console.log(findNextLarger([4, 1, 3, 5, 6], 2));
