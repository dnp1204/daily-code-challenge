/**
 * Company: Atlassian.
 *
 * MegaCorp wants to give bonuses to its employees based on how many lines of codes they have written.
 * They would like to give the smallest positive amount to each worker consistent with the constraint
 * that if a developer has written more lines of code than their neighbor, they should receive more
 * money.
 *
 * Given an array representing a line of seats of employees at MegaCorp, determine how much each one
 * should get paid.
 *
 * For example, given [10, 40, 200, 1000, 60, 30], you should return [1, 2, 3, 4, 2, 1].
 *
 * Leetcode: https://leetcode.com/problems/candy/
 */
var candy = function(ratings) {
  if (!ratings.length) return 0;
  const n = ratings.length;
  const ans = Array(ratings.length).fill(1);

  for (let i = 1; i < n; ) {
    while (i < n && ratings[i] > ratings[i - 1]) {
      ans[i] = ans[i - 1] + 1;
      i++;
    }

    let end = i;
    while (end < n && ratings[end] < ratings[end - 1]) {
      end++;
    }

    for (let j = i; j < end; j++, i++) {
      ans[i - 1] = Math.max(ans[i - 1], end - j + 1);
    }

    if (i >= 0 && ratings[i] === ratings[i - 1]) {
      i++;
    }
  }

  return ans.reduce((acc, num) => acc + num);
};
