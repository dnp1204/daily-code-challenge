/**
 * Company: Coursera.
 *
 * Given a 2D board of characters and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell, where
 * "adjacent" cells are those horizontally or vertically neighboring. The same letter
 * cell may not be used more than once.
 *
 * For example, given the following board:
 * [
 *  ['A','B','C','E'],
 *  ['S','F','C','S'],
 *  ['A','D','E','E']
 * ]
 * exists(board, "ABCCED") returns true, exists(board, "SEE") returns true,
 * exists(board, "ABCB") returns false.
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
    if (
      search(i - 1, j, index + 1) ||
      search(i + 1, j, index + 1) ||
      search(i, j - 1, index + 1) ||
      search(i, j + 1, index + 1)
    ) {
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
