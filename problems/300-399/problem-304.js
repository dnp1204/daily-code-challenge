/**
 * Company: Two Sigma.
 *
 * A knight is placed on a given square on an 8 x 8 chessboard. It is then moved randomly several times,
 * where each move is a standard knight move. If the knight jumps off the board at any point, however,
 * it is not allowed to jump back on.
 *
 * After k moves, what is the probability that the knight remains on the board?
 *
 * Leetcode: https://leetcode.com/problems/knight-probability-in-chessboard/
 */
var knightProbability = function(N, K, r, c) {
  const dp = [];
  const dirs = [
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2]
  ];

  for (let i = 0; i <= K; i++) {
    dp[i] = [];
    for (let j = 0; j < N; j++) {
      dp[i][j] = [];
      for (let k = 0; k < N; k++) {
        dp[i][j][k] = 0;
      }
    }
  }

  dp[0][r][c] = 1;
  for (let i = 1; i <= K; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        for (const dir of dirs) {
          const x = j + dir[0];
          const y = k + dir[1];
          if (x < 0 || y < 0 || x >= N || y >= N) continue;
          dp[i][j][k] += dp[i - 1][x][y] * 0.125;
        }
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ans += dp[K][i][j];
    }
  }

  return ans;
};

const method1 = (N, K, r, c) => {
  const dirs = [
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2]
  ];

  const helper = (r, c, turns = 0) => {
    if (r < 0 || c < 0 || r >= N || c >= N) return 0;
    if (turns === K) return 1;

    let count = 0;
    for (const dir of dirs) {
      count += helper(r + dir[0], c + dir[1], turns + 1);
    }
    return count / 8;
  };

  return helper(r, c);
};
