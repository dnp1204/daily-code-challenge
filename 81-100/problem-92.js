/**
 * Company: Google.
 *
 * Given a set of closed intervals, find the smallest set of numbers that covers all
 * the intervals. If there are multiple smallest sets, return any of them.
 *
 * For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one set of numbers
 * that covers all these intervals is {3, 6}.
 */
var merge = function(intervals) {
  if (!intervals.length) return [];
  intervals.sort((interval1, interval2) => {
    return interval1.start - interval2.start || interval1.end - interval2.end;
  });

  const result = [intervals[0]];
  let currentIndex = 0;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const currentInterval = result[currentIndex];
    if (interval.start < currentInterval.start) {
      currentInterval.start = interval.start;
    }
    if (interval.start <= currentInterval.end) {
      if (interval.end > currentInterval.end) {
        currentInterval.end = interval.end;
      }
    } else {
      result.push(interval);
      currentIndex++;
    }
  }

  return result;
};
