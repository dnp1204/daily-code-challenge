/**
 * Company: Spotify.
 *
 * Write a function, throw_dice(N, faces, total), that determines how many ways it is possible to
 * throw N dice with some number of faces each to get a specific total.
 *
 * For example, throw_dice(3, 6, 7) should equal 15.
 */
const throwDice = function(N, faces, total) {
  return method1(N, faces, total);
};

const method1 = function(N, faces, total) {
  const memo = [];

  for (let i = 0; i <= N; i++) {
    memo[i] = [];
    for (let j = 0; j <= total; j++) {
      memo[i][j] = 0;
    }
  }

  memo[0][0] = 1;

  for (let i = 1; i <= N; i++) {
    for (let j = i; j <= total; j++) {
      memo[i][j] = memo[i][j - 1] + memo[i - 1][j - 1];
      if (j - faces - 1 >= 0) {
        memo[i][j] -= memo[i - 1][j - faces - 1];
      }
    }
  }

  return memo[N][total];
};

const method2 = function(N, faces, total) {
  const memo = [];

  for (let i = 0; i <= N; i++) {
    memo[i] = [];
    for (let j = 0; j <= total; j++) {
      memo[i][j] = 0;
    }
  }

  for (let i = 1; i <= faces && i <= total; i++) {
    memo[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j <= total; j++) {
      for (let k = 1; k <= faces && k < j; k++) {
        memo[i][j] += memo[i - 1][j - k];
      }
    }
  }

  return memo[N][total];
};

console.log(throwDice(3, 6, 7));
console.log(throwDice(3, 6, 12));
console.log(throwDice(6, 3, 8));
