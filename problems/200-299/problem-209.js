/**
 * Company: Google.
 *
 * Write a program that computes the length of the longest common subsequence
 * of three given strings. For example, given "epidemiologist", "refrigeration",
 * and "supercalifragilisticexpialodocious", it should return 5, since the
 * longest common subsequence is "eieio".
 */
const findCommonSubsequence = function(word1, word2, word3) {
  const helper = function(s1, s2) {
    const dp = [];
    const M = s1.length;
    const N = s2.length;

    for (let i = 0; i <= M; i++) {
      dp[i] = [];
      for (let j = 0; j <= N; j++) {
        if (i === 0 || j === 0) {
          dp[i][j] = 0;
        } else if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    let i = M;
    let j = N;

    const common = [];
    while (i > 0 && j > 0) {
      const char1 = s1.charAt(i - 1);
      const char2 = s2.charAt(j - 1);
      if (char1 === char2) {
        common.push(char1);
        i--;
        j--;
      } else {
        if (dp[i][j - 1] > dp[i - 1][j]) {
          j--;
        } else {
          i--;
        }
      }
    }

    return common.reverse().join('');
  };

  return helper(helper(word1, word2), word3);
};

console.log(
  findCommonSubsequence(
    'epidemiologist',
    'refrigeration',
    'supercalifragilisticexpialodocious'
  )
);
