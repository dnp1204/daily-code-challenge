/**
 * Company: Twitter.
 *
 * A permutation can be specified by an array P, where P[i] represents the location of the
 * element at i in the permutation. For example, [2, 1, 0] represents the permutation where
 * elements at the index 0 and 2 are swapped.
 *
 * Given an array and a permutation, apply the permutation to the array. For example, given
 * the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].
 */
const permutate = function(arr, index) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    while (index[i] !== i) {
      swap(arr, index[i], i);
      swap(index, index[i], i);
    }
  }
};

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

permutate(['a', 'b', 'c'], [2, 1, 0]);
permutate(['a', 'b', 'c'], [2, 0, 1]);
permutate(['a', 'b', 'c', 'd'], [3, 0, 1, 2]);
