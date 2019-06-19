/**
 * Company: Uber.
 *
 * One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.
 *
 * For a pattern to be valid, it must satisfy the following:
 *
 * All of its keys must be distinct.
 * It must not connect two keys by jumping over a third key, unless that key has already been used.
 * For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.
 *
 * Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.
 *
 * Leetcode: https://leetcode.com/problems/android-unlock-patterns/
 * Medium: https://medium.com/@rebeccahezhang/leetcode-351-android-unlock-patterns-d9bae4a8a958
 */
const numsOfPatterns = function(N) {
  const visited = Array(10).fill(false);
  const jump = [];

  const dfs = function(visited, current, remain) {
    if (remain < 0) return 0;
    if (remain === 0) return 1;

    visited[current] = true;
    let res = 0;

    for (let i = 1; i < 10; i++) {
      if (
        !visited[i] &&
        (jump[current][i] === 0 || visited[jump[current][i]])
      ) {
        res += dfs(visited, i, remain - 1);
      }
    }

    visited[current] = false;
    return res;
  };

  for (let i = 0; i < 10; i++) {
    jump[i] = [];
    for (let j = 0; j < 10; j++) {
      jump[i][j] = 0;
    }
  }

  //  2 lies between 1 and 3
  jump[1][3] = jump[3][1] = 2;

  //  8 lies between 7 and 9
  jump[7][9] = jump[9][7] = 8;

  //  4 lies between 1 and 7
  jump[1][7] = jump[7][1] = 4;

  //  6 lies between 3 and 9
  jump[3][9] = jump[9][3] = 6;

  //  5 lies between 1, 9  2, 8  3, 7 and 4, 6
  jump[1][9] = jump[9][1] = jump[2][8] = jump[8][2] = jump[3][7] = jump[7][3] = jump[4][6] = jump[6][4] = 5;

  // Use the symmetry to reduce DFS call
  let ans = 0;
  ans += dfs(visited, 1, N - 1) * 4;
  ans += dfs(visited, 2, N - 1) * 4;
  ans += dfs(visited, 5, N - 1);

  return ans;
};

console.log(numsOfPatterns(1));
console.log(numsOfPatterns(4));
console.log(numsOfPatterns(9));
