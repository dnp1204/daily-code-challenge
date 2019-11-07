/**
 * Company: Amazon.
 *
 * Given a matrix of 1s and 0s, return the number of "islands" in the matrix.
 * A 1 represents land and 0 represents water, so an island is a group of 1s
 * that are neighboring whose perimeter is surrounded by water.
 *
 * For example, this matrix has 4 islands.
 * 1 0 0 0 0
 * 0 0 1 1 0
 * 0 1 1 0 0
 * 0 0 0 0 0
 * 1 1 0 0 1
 * 1 1 0 0 1
 */
var numIslands = function(grid) {
  if (!grid.length) return 0;
  let count = 0;
  const numOfRows = grid.length;
  const numOfCols = grid[0].length;

  const dfsMarking = function(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= numOfRows ||
      j >= numOfCols ||
      grid[i][j] !== '1'
    )
      return;
    grid[i][j] = '0';
    dfsMarking(i + 1, j);
    dfsMarking(i - 1, j);
    dfsMarking(i, j + 1);
    dfsMarking(i, j - 1);
  };

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfCols; j++) {
      if (grid[i][j] === '1') {
        dfsMarking(i, j);
        count++;
      }
    }
  }

  return count;
};
