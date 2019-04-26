/**
 * Company: LinkedIn.
 *
 * Given a list of points, a central point, and an integer k, find the
 * nearest k points from the central point.
 *
 * For example, given the list of points [(0, 0), (5, 4), (3, 1)], the
 * central point (1, 2), and k = 2, return [(0, 0), (3, 1)].
 *
 * Leetcode: https://leetcode.com/problems/k-closest-points-to-origin
 */
const PriorityQueue = require('../libraries/PriorityQueue');

var kClosest = function(points, centralPoint, K) {
  const calculateDistance = function(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const queue = new PriorityQueue(points, (point1, point2) => {
    const distance1 = calculateDistance(point1, centralPoint);
    const distance2 = calculateDistance(point2, centralPoint);
    return distance1 - distance2;
  });

  const result = [];
  for (let i = 0; i < K; i++) {
    result.push(queue.pop());
  }
  return result;
};

console.log(kClosest([[0, 0], [5, 4], [3, 1]], [1, 2], 2));
