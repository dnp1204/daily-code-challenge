/**
 * Company: Sumo Logic.
 *
 * Given an unsorted array, in which all elements are distinct, find a "peak" element in O(log N) time.
 *
 * An element is considered a peak if it is greater than both its left and right neighbors. It is guaranteed
 * that the first and last elements are lower than all others.
 *
 * Leetcode: https://leetcode.com/problems/find-peak-element/
 */
function mainFunc(arr){

  if (arr.length === 0) {
    return null;
  }

  let midEl = Math.floor(arr.length / 2);

  if ((midEl > 0 && arr[midEl] > arr[midEl - 1]) && (midEl < arr.length && arr[midEl] > arr[midEl + 1])) {
    return arr[midEl];
  }

  if (midEl > 0 && arr[midEl] > arr[midEl - 1]) {
    return mainFunc(arr.slice(0, midEl));
  }
  return mainFunc(arr.slice(midEl, arr.length - 1));
}

// test
let testArr = [2, 2, 5];
mainFunc(testArr);

let testArrTwo = [2, 7, 5];
mainFunc(testArrTwo);
