/**
 * Company: Google.
 *
 * Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles
 * don't intersect, return 0.
 *
 * For example, given the following rectangles:
 *
 * {
 * "top_left": (1, 4),
 * "dimensions": (3, 3) # width, height
 * }
 *
 * and
 *
 * {
 * "top_left": (0, 5),
 * "dimensions": (4, 3) # width, height
 * }
 *
 * return 6.
 *
 * Leetcode: https://leetcode.com/problems/rectangle-area/
 */
const computeArea = function(rect1, rect2) {
  const topLeft1 = rect1.topLeft;
  const dimensions1 = rect1.dimensions;
  const bottomRight1 = [
    topLeft1[0] + dimensions1[0],
    topLeft1[1] - dimensions1[1]
  ];

  const topLeft2 = rect2.topLeft;
  const dimensions2 = rect2.dimensions;
  const bottomRight2 = [
    topLeft2[0] + dimensions2[0],
    topLeft2[1] - dimensions2[1]
  ];

  const topLeft = [
    Math.max(topLeft1[0], topLeft2[0]),
    Math.min(topLeft1[1], topLeft2[1])
  ];
  const bottomRight = [
    Math.min(bottomRight1[0], bottomRight2[0]),
    Math.max(bottomRight1[1], bottomRight2[1])
  ];

  if (topLeft[0] > bottomRight[0] || topLeft[1] < bottomRight[1]) return 0;

  return (bottomRight[0] - topLeft[0]) * (topLeft[1] - bottomRight[1]);
};

console.log(
  computeArea(
    { topLeft: [1, 4], dimensions: [3, 3] },
    { topLeft: [0, 5], dimensions: [4, 3] }
  )
);
console.log(
  computeArea(
    { topLeft: [1, 1], dimensions: [2, 2] },
    { topLeft: [0, 3], dimensions: [4, 3] }
  )
);
console.log(
  computeArea(
    { topLeft: [0, 5], dimensions: [5, 5] },
    { topLeft: [6, 6], dimensions: [4, 3] }
  )
);
