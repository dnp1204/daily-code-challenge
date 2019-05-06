/**
 * Company: Google.
 *
 * Let A be an N by M matrix in which every row and every column is sorted.
 *
 * Given i1, j1, i2, and j2, compute the number of elements of M smaller
 * than M[i1, j1] and larger than M[i2, j2].
 *
 * For example, given the following matrix:
 *
 * [[1, 3, 7, 10, 15, 20],
 * [2, 6, 9, 14, 22, 25],
 * [3, 8, 10, 15, 25, 30],
 * [10, 11, 12, 23, 30, 35],
 * [20, 25, 30, 35, 40, 45]]
 *
 * And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the
 * matrix smaller than 6 or greater than 23.
 */
const countElement = function(matrix, i1, j1, i2, j2) {
  const lessCount = countLess(matrix, i1, j1);
  const greatCount = countGreater(matrix, i2, j2);
  return { lessCount, greatCount };
};

const countLessHelper = function(matrix, target, i, j) {
  const n = matrix[0].length;

  if (matrix[i][0] > target) return 0;

  let start = 0;
  let end = n;
  let middle = 0;

  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (
      middle + 1 < n &&
      matrix[i][middle] < target &&
      matrix[i][middle + 1] >= target
    ) {
      return middle + 1;
    }

    if (matrix[i][middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return start + 1;
};

const countLess = function(matrix, i, j) {
  const m = matrix.length;
  const target = matrix[i][j];

  let count = j;

  let row = i - 1;
  while (row >= 0) {
    count += countLessHelper(matrix, target, row, j);
    row--;
  }

  row = i + 1;
  while (row < m) {
    count += countLessHelper(matrix, target, row, j);
    row++;
  }

  return count;
};

const countGreaterHelper = function(matrix, target, i, j) {
  const n = matrix[0].length;
  if (matrix[i][0] > target || matrix[i][n - 1] < target) return 0;

  let start = 0;
  let end = n;
  let middle = 0;

  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (
      middle > 0 &&
      matrix[i][middle] > target &&
      matrix[i][middle - 1] <= target
    ) {
      return n - middle;
    }

    if (matrix[i][middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return n - start + 1;
};

const countGreater = function(matrix, i, j) {
  const m = matrix.length;
  const n = matrix[0].length;
  const target = matrix[i][j];

  let count = n - j - 1;

  let row = i - 1;
  while (row >= 0) {
    count += countGreaterHelper(matrix, target, row, j);
    row--;
  }

  row = i + 1;
  while (row < m) {
    count += countGreaterHelper(matrix, target, row, j);
    row++;
  }

  return count;
};

console.log(
  countElement(
    [
      [1, 3, 3, 10, 15, 20],
      [2, 6, 9, 14, 22, 25],
      [3, 8, 10, 15, 25, 30],
      [10, 11, 12, 23, 30, 35],
      [20, 25, 30, 35, 40, 45]
    ],
    1,
    1,
    3,
    3
  )
);
