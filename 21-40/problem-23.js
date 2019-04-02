/**
 * Company: Dropbox.
 *
 * Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits.
 * The objective is to fill the grid with the constraint that every row, column,
 * and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.
 *
 * Implement an efficient sudoku solver.
 *
 * Leetcode: https://leetcode.com/problems/sudoku-solver/
 * Youtube: https://www.youtube.com/watch?v=JzONv5kaPJM
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const canPlaceValue = function(board, row, col, charToPlace) {
    for (const element of board) {
      if (charToPlace === element[col]) {
        return false;
      }
    }

    for (let i = 0; i < board.length; i++) {
      if (charToPlace === board[row][i]) {
        return false;
      }
    }

    const regionSize = Math.floor(Math.sqrt(board.length));

    const I = Math.floor(row / regionSize);
    const J = Math.floor(col / regionSize);

    const topLeftOfSubBoxRow = regionSize * I;
    const topLeftOfSubBoxCol = regionSize * J;

    for (let i = 0; i < regionSize; i++) {
      for (let j = 0; j < regionSize; j++) {
        if (
          charToPlace == board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]
        ) {
          return false;
        }
      }
    }

    return true;
  };

  const solveSudokuCell = function(row, col, board) {
    if (col === board[row].length) {
      col = 0;
      row++;

      // Entire board has been filled without conflict.
      if (row === board.length) {
        return true;
      }
    }

    if (board[row][col] !== '.') {
      return solveSudokuCell(row, col + 1, board);
    }

    for (let value = 1; value <= board.length; value++) {
      if (canPlaceValue(board, row, col, value + '')) {
        board[row][col] = value + '';
        if (solveSudokuCell(row, col + 1, board)) {
          return true;
        }
      }
    }

    // Undo assignment to this cell. No values worked in it meaning that
    // previous states put us in a position we cannot solve from. Hence,
    // we backtrack by returning "false" to our caller.
    board[row][col] = '.';
    return false;
  };

  solveSudokuCell(0, 0, board);
};
