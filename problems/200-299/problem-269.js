/**
 * Company: Microsoft.
 *
 * You are given an string representing the initial conditions of some dominoes. Each element can take
 * one of three values:
 *
 * L, meaning the domino has just been pushed to the left,
 * R, meaning the domino has just been pushed to the right, or
 * ., meaning the domino is standing still.
 *
 * Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives
 * a force from the left and right side simultaneously, it will remain upright.
 *
 * For example, given the string .L.R....L, you should return LL.RRRLLL.
 *
 * Given the string ..R...L.L, you should return ..RR.LLLL.
 *
 * Leetcode: https://leetcode.com/problems/push-dominoes/
 */
var pushDominoes = function(dominoes) {
  dominoes = dominoes.split('');
  const n = dominoes.length;

  for (let i = 0; i < n; i++) {
    while (i < n && dominoes[i] === '.') {
      i++;
    }

    if (i === n) break;

    if (dominoes[i] === 'R') {
      let end = i + 1;
      while (end < n && dominoes[end] === '.') {
        end++;
      }

      if (end === n || dominoes[end] === 'R') {
        while (i < end) dominoes[i++] = 'R';
        i = end - 1;
      } else {
        let j = end;
        while (i < j - 1) {
          dominoes[++i] = 'R';
          dominoes[--j] = 'L';
          if (i === j) dominoes[i] = '.';
        }
        i = end;
      }
      continue;
    }

    let end = i - 1;
    while (end >= 0 && dominoes[end] === '.' && dominoes[i] === 'L') {
      dominoes[end--] = 'L';
    }
  }

  return dominoes.join('');
};
