/**
 * Company: Microsoft.
 *
 * Given a 2D matrix of characters and a target word, write a function that returns
 * whether the word can be found in the matrix by going left-to-right, or up-to-down.
 *
 * For example, given the following matrix:
 * [['F', 'A', 'C', 'I'],
 * ['O', 'B', 'Q', 'P'],
 * ['A', 'N', 'O', 'B'],
 * ['M', 'A', 'S', 'S']]
 * and the target word 'FOAM', you should return true, since it's the leftmost column.
 * Similarly, given the target word 'MASS', you should return true, since it's the last
 * row.
 */
var exist = function(board, word) {
  if (!word) return true;
  const visited = {};

  const search = function(i, j, index) {
    if (index === word.length) return true;
    if (
      i >= board.length ||
      i < 0 ||
      j >= board[0].length ||
      j < 0 ||
      board[i][j] !== word.charAt(index) ||
      visited[`${i}${j}`]
    ) {
      return false;
    }

    visited[`${i}${j}`] = true;
    if (search(i - 1, j, index + 1) || search(i, j + 1, index + 1)) {
      return true;
    }
    visited[`${i}${j}`] = false;
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word.charAt(0) && search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
