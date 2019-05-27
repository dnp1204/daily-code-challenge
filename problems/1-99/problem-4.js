/**
 * Company: Google.
 *
 * Given an array of integers, find the first missing positive
 * integer in linear time and constant space. In other words,
 * find the lowest positive integer that does not exits in the
 * array. The array can contain duplicates and negative numbers
 * as well
 *
 * For example, the input [3, 4, -1, 1] should give 2. The input
 * [1, 2, 0] should give 3. You can modify the input array in-place.
 *
 * GeeksForGeeks:
 * https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/
 */
function findMissingNumber(array) {
  let val = array[0];
  let next = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] <= 0 || array[i] > array.length) continue;

    val = array[i];

    while (array[val - 1] !== val) {
      next = array[val - 1];
      array[val - 1] = val;
      val = next;

      if (val <= 0 || val > array.length) {
        break;
      }
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== i + 1) return i + 1;
  }

  return array.length + 1;
}

console.log(findMissingNumber([3, 4, -1, 1]));
console.log(findMissingNumber([7, 8, 9, 10]));
