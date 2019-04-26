/**
 * Company: Google.
 *
 * A knight's tour is a sequence of moves by a knight on a chessboard such that
 * all squares are visited once.
 *
 * Given N, write a function to return the number of knight's tours on an N by N
 * chessboard.
 *
 * Dailycoding: https://www.dailycodingproblem.com/blog/knights-tour/
 * GeeksForGeeks: https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/
 */
function knightsTours(n) {
  const board = [];
  const moves = [
    [2, 1],
    [1, 2],
    [1, -2],
    [-2, 1],
    [-1, 2],
    [2, -1],
    [-1, -2],
    [-2, -1]
  ];
  let total = 0;

  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = -1;
    }
  }

  const isValidMove = function(board, N, row, col) {
    return row >= 0 && row < N && col >= 0 && col < N && board[row][col] === -1;
  };

  const helper = function(board, N, value, row = 0, col = 0) {
    if (value === N * N) return true;
    for (const move of moves) {
      const nextRow = row + move[0];
      const nextCol = col + move[1];

      if (isValidMove(board, N, nextRow, nextCol)) {
        total += 1;
        board[nextRow][nextCol] = value;
        if (helper(board, N, value + 1, nextRow, nextCol)) {
          return true;
        } else {
          board[nextRow][nextCol] = -1;
        }
      }
    }
    return false;
  };

  board[0][0] = 0;
  if (helper(board, n, 1)) {
    console.log(board);
    return total;
  }

  return -1;
}

console.log(knightsTours(5));
