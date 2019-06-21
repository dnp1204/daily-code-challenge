/**
 * Company: Microsoft.
 *
 * Let X be a set of n intervals on the real line. We say that a set of points
 * P "stabs" X if every interval in X contains at least one point in P. Compute
 * the smallest set of points that stabs X.
 *
 * For example, given the intervals [[1, 4), (4, 5), (7, 9), (9, 12)], you should
 * return [4, 9].
 */
const findPointsP = function(intervals) {
  const ans = [];

  if (!intervals.length) return ans;

  intervals.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  ans.push(intervals[0][1]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > ans[ans.length - 1]) {
      ans.push(intervals[i][1]);
    }
  }

  return ans;
};

console.log(findPointsP([[1, 4], [4, 5], [7, 9], [9, 12]]));
console.log(findPointsP([[1, 4], [-2, 0], [4, 5], [7, 9]]));
console.log(findPointsP([[0, 4], [-2, 0], [4, 5], [7, 9]]));
