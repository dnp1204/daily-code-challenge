/**
 * Company: Google.
 *
 * You are given given a list of rectangles represented by min and max x- and y-coordinates.
 * Compute whether or not a pair of rectangles overlap each other. If one rectangle completely
 * covers another, it is considered overlapping.
 *
 * For example, given the following rectangles:
 *
 * {
 * "top_left": (1, 4),
 * "dimensions": (3, 3) # width, height
 * },
 * {
 * "top_left": (-1, 3),
 * "dimensions": (2, 1)
 * },
 * {
 * "top_left": (0, 5),
 * "dimensions": (4, 3)
 * }
 *
 * return true as the first and third rectangle overlap each other.
 */
const isPairOverlap = function(rects) {
  rects.sort((rect1, rect2) => {
    const topLeft1 = rect1.topLeft;
    const topLeft2 = rect2.topLeft;

    if (topLeft1[0] === topLeft2[0]) return topLeft2[1] - topLeft1[1];
    return topLeft1[0] - topLeft2[0];
  });

  for (let i = 0; i < rects.length - 1; i++) {
    if (isOverlap(rects[i], rects[i + 1])) {
      return true;
    }
  }

  return false;
};

function isOverlap(rect1, rect2) {
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

  if (topLeft1[0] > bottomRight2[0] || topLeft2[0] > bottomRight1[0]) {
    return false;
  }

  if (topLeft1[1] < bottomRight2[1] || topLeft2[1] < bottomRight1[1]) {
    return false;
  }

  return true;
}

console.log(
  isPairOverlap([
    { topLeft: [1, 4], dimensions: [3, 3] },
    { topLeft: [-1, 3], dimensions: [2, 1] },
    { topLeft: [0, 5], dimensions: [4, 3] }
  ])
);

console.log(
  isPairOverlap([
    { topLeft: [5, 4], dimensions: [3, 3] },
    { topLeft: [-1, 3], dimensions: [2, 1] },
    { topLeft: [3, 4], dimensions: [4, 3] }
  ])
);

console.log(
  isPairOverlap([
    { topLeft: [1, 4], dimensions: [3, 3] },
    { topLeft: [0, 3], dimensions: [2, 1] },
    { topLeft: [0, 5], dimensions: [4, 3] }
  ])
);

console.log(
  isPairOverlap([
    { topLeft: [0, 5], dimensions: [5, 5] },
    { topLeft: [6, 6], dimensions: [4, 3] }
  ])
);
