/**
 * Company: Stripe.
 *
 * Given a collection of intervals, find the minimum number of intervals you need to remove
 * to make the rest of the intervals non-overlapping.
 *
 * Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.
 *
 * For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can
 * be removed and the first two won't overlap.
 *
 * The intervals are not necessarily sorted in any order.
 *
 * Leetcode: https://leetcode.com/problems/non-overlapping-intervals/
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let start = 0,
    ans = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[start][1] > intervals[i][0]) {
      ans++;
    } else {
      start = i;
    }
  }

  return ans;
};
