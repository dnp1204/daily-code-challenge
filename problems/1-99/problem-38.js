/**
 * Company: Microsoft.
 *
 * You have an N by N board. Write a function that, given N,
 * returns the number of possible arrangements of the board
 * where N queens can be placed on the board without threatening
 * each other, i.e. no two queens share the same row, column, or
 * diagonal.
 *
 * Leetcode: https://leetcode.com/problems/n-queens/
 */
var solveNQueens = function(n) {
  const result = [];
  const board = [];

  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = '.';
    }
  }

  const isValid = function(board, n, row, col) {
    if (row < 0 || col < 0 || row >= n || col >= n || board[row][col] !== '.')
      return false;

    for (let i = row; i >= 0; i--) {
      if (board[i][col] !== '.') return false;
    }

    for (let j = col; j >= 0; j--) {
      if (board[row][j] !== '.') return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] !== '.') return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] !== '.') return false;
    }

    return true;
  };

  const solveNQueensCell = function(board, nQueen, n, row) {
    if (nQueen === 0) {
      const newBoard = [];
      for (let i = 0; i < board.length; i++) {
        newBoard[i] = board[i].join('');
      }
      result.push(newBoard);
      return result;
    }

    for (let j = 0; j < n; j++) {
      if (isValid(board, n, row, j)) {
        board[row][j] = 'Q';
        solveNQueensCell(board, nQueen - 1, n, row + 1);
        board[row][j] = '.';
      }
    }

    return result;
  };

  return solveNQueensCell(board, n, n, 0);
};

console.log(solveNQueens(4));
