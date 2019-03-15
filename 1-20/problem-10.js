/**
 * Company: Snapchat.
 *
 * Given an array of time intervals (start, end) for classroom lectures
 * (possibly overlapping), find the minimum number of rooms required.
 *
 * For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
 *
 * Leetcode: https://leetcode.com/problems/meeting-rooms-ii
 */
function findNumRooms(intervals) {
  intervals.sort((interval1, interval2) => {
    if (interval1.start !== interval2.start) {
      return interval1.start - interval2.start;
    }
    return interval1.end - interval2.end;
  });
  let queue = [intervals[0]];
  let count = 1;
  console.log(intervals);
  for (let i = 1; i < intervals.length; i++) {
    const topInterval = queue[0];
    const currentInterval = intervals[i];

    if (topInterval.end > currentInterval.start) {
      count++;
    } else {
      queue.shift();
    }
    queue.push(currentInterval);
    // We need to use priority queue for this, but I am to lazy to implement
    // it. https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
    queue.sort((interval1, interval2) => interval1.end - interval2.end);
  }

  return count;
}

console.log(
  findNumRooms([
    { start: 30, end: 75 },
    { start: 0, end: 50 },
    { start: 0, end: 30 },
    { start: 60, end: 150 }
  ]),
  2
);

console.log(
  findNumRooms([
    { start: 2, end: 15 },
    { start: 36, end: 45 },
    { start: 9, end: 29 },
    { start: 16, end: 23 },
    { start: 4, end: 9 }
  ]),
  2
);

console.log(
  findNumRooms([
    { start: 10, end: 16 },
    { start: 11, end: 13 },
    { start: 14, end: 7 }
  ]),
  2
);
