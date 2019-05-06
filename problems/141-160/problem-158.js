/**
 * Company: Facebook.
 *
 * Suppose you are given two lists of n points, one list p1, p2, ..., pn on the line y = 0
 * and the other list q1, q2, ..., qn on the line y = 1. Imagine a set of n line segments
 * connecting each point pi to qi. Write an algorithm to determine how many pairs of the
 * line segments intersect.
 */
const getIntersections = function(p, q) {
  const points = [];
  let count = 0;
  let map = {};

  for (let i = 0; i < p.length; i++) {
    points.push([p[i], q[i]]);
  }

  points.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let temp = [...q];
  temp.sort((a, b) => a - b);
  temp = temp.filter((value, index, self) => self.indexOf(value) === index);

  for (let i = 0; i < temp.length; i++) {
    map[points[i][1]] = temp.length - i;
  }

  points.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let maxQ = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][0] && points[i][1] < maxQ) {
      count += map[points[i][1]] - map[maxQ];
    }
  }

  return count;
};

const method2 = function(points) {
  let count = 0;
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][0] < points[j][0] && points[i][1] > points[j][1]) count++;
    }
  }
  return count;
};

console.log(getIntersections([1, 4, 6, 5, 5, 7, 6], [4, 2, -1, 3, -1, 4, 7]));
console.log(getIntersections([1, 4, 5], [2, 3, 4]));
