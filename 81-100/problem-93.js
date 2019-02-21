/**
 * Company: Google
 *
 * Given a string which we can delete at most k, return whether you can make a palindrome.
 * For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'
 */
const isValidPalindrome = function(s, k) {
  const longestLength = longestPalindromeSubseq(s);
  return k - longestLength >= 0;
};

var longestPalindromeSubseq = function(s) {
  return dynamicMethod(s);
};

const dynamicMethod = function(s) {
  if (s.length === 0) return 0;
  const X = s.split('');
  const n = X.length;
  const table = Array(n + 1).fill(Array(n + 1).fill(0));

  const helper = function(X, i, j, memo) {
    if (memo[i][j]) return memo[i][j];
    if (i > j) return 0;
    if (i === j) return 1;

    if (X[i] === X[j]) {
      memo[(i, j)] = helper(X, i + 1, j - 1, memo) + 2;
    } else {
      memo[(i, j)] = Math.max(
        helper(X, i, j - 1, memo),
        helper(X, i + 1, j, memo)
      );
    }
    return memo[(i, j)];
  };

  return helper(X, 0, n, table);
};

const recursionMethod = function(s) {
  if (s.length === 0) return 0;
  const X = s.split('');

  const helper = function(X, i, j) {
    if (i === j) return 1;
    if (X[i] === X[j] && i + 1 === j) return 2;
    if (X[i] === X[j]) return helper(X, i + 1, j - 1) + 2;

    return Math.max(helper(X, i, j - 1), helper(X, i + 1, j));
  };

  return helper(X, 0, X.length - 1);
};

const print = function(s) {
  if (s.length === 0) return 0;
  const X = s.split('');
  const helper = function(X, i, j) {
    if (i === j) return X[i];
    if (X[i] === X[j] && i + 1 === j) return X[i] + X[j];
    if (X[i] === X[j]) return X[i] + helper(X, i + 1, j - 1) + X[j];

    const left = helper(X, i, j - 1);
    const right = helper(X, i + 1, j);

    if (left.length > right.length) return left;
    return right;
  };

  return helper(X, 0, X.length - 1);
};
