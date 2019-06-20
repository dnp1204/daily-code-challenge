/**
 * Company: Palantir.
 *
 * In academia, the h-index is a metric used to calculate the impact of a researcher's papers.
 * It is calculated as follows:
 *
 * A researcher has index h if at least h of her N papers have h citations each. If there are
 * multiple h satisfying this formula, the maximum is chosen.
 *
 * For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5].
 * Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.
 *
 * Given a list of paper citations of a researcher, calculate their h-index.
 *
 * Leetcode: https://leetcode.com/problems/h-index/
 */
var hIndex = function(citations) {
  const n = citations.length;
  citations.sort((a, b) => a - b);

  if (n === 0) return 0;
  if (citations[0] >= n) return n;

  let ans = 0,
    max = 0;

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) return n - i;
  }

  return ans;
};
