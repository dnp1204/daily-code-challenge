/**
 * Company: Unknown
 *
 * Given a 2-D matrix representing an image, a location of a pixel in the screen and a
 * color C, replace the color of the given pixel and all adjacent same colored pixels
 * with C.
 *
 * For example, given the following matrix, and location pixel of (2, 2), and 'G' for
 * green:
 *
 * B B W
 * W W W
 * W W W
 * B B B
 *
 * Becomes
 *
 * B B G
 * G G G
 * G G G
 * B B B
 *
 * Leetcode: https://leetcode.com/problems/flood-fill/
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const sColor = image[sr][sc];
  const queue = [];
  const rows = image.length;
  const cols = image[0].length;
  if (sColor === newColor) return image;

  queue.push([sr, sc]);

  while (queue.length) {
    const [row, col] = queue.shift();

    if (row + 1 < rows && image[row + 1][col] === sColor) {
      queue.push([row + 1, col]);
    }

    if (row - 1 >= 0 && image[row - 1][col] === sColor) {
      queue.push([row - 1, col]);
    }

    if (col + 1 < cols && image[row][col + 1] === sColor) {
      queue.push([row, col + 1]);
    }

    if (col - 1 >= 0 && image[row][col - 1] === sColor) {
      queue.push([row, col - 1]);
    }

    image[row][col] = newColor;
  }

  return image;
};
