/**
 * Company: Google.
 *
 * You are given an M by N matrix consisting of booleans that
 * represents a board. Each True boolean represents a wall. Each
 * False boolean represents a tile you can walk on.
 *
 * Given this matrix, a start coordinate, and an end coordinate,
 * return the minimum number of steps required to reach the end
 * coordinate from the start. If there is no possible path, then
 * return null. You can move up, left, down, and right. You cannot
 * move through walls. You cannot wrap around the edges of the board.
 *
 * For example, given the following board:
 * [[f, f, f, f],
 * [t, t, f, t],
 * [f, f, f, f],
 * [f, f, f, f]]
 * and start = (3, 0) (bottom left) and end = (0, 0) (top left), the
 * minimum number of steps required to reach the end is 7, since we
 * would need to go through (1, 2) because there is a wall everywhere
 * else on the second row.
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function solveMaze(maze, start, end) {
  let minSteps = Number.MAX_SAFE_INTEGER;
  const visited = [];

  for (let i = 0; i < maze.length; i++) {
    visited[i] = [];
    for (let j = 0; j < maze.length; j++) {
      visited[i][j] = false;
    }
  }

  const helper = function(maze, start, end, steps) {
    if (start.x === end.x && start.y === end.y) {
      minSteps = Math.min(minSteps, steps);
      return steps;
    }

    const { x, y } = start;
    if (
      x < 0 ||
      x >= maze.length ||
      y < 0 ||
      y >= maze[0].length ||
      maze[x][y] === 't'
    ) {
      return null;
    }

    if (x + 1 < maze.length && !visited[x + 1][y]) {
      visited[x + 1][y] = true;
      helper(maze, { x: x + 1, y }, end, steps + 1);
      visited[x + 1][y] = false;
    }

    if (x - 1 >= 0 && !visited[x - 1][y]) {
      visited[x - 1][y] = true;
      helper(maze, { x: x - 1, y }, end, steps + 1);
      visited[x - 1][y] = false;
    }

    if (y + 1 < maze[0].length && !visited[x][y + 1]) {
      visited[x][y + 1] = true;
      helper(maze, { x, y: y + 1 }, end, steps + 1);
      visited[x][y + 1] = false;
    }

    if (y - 1 >= 0 && !visited[x][y - 1]) {
      visited[x][y - 1] = true;
      helper(maze, { x, y: y - 1 }, end, steps + 1);
      visited[x][y - 1] = false;
    }
    return steps;
  };

  helper(maze, start, end, 0);
  return minSteps;
}

const maze = [
  ['f', 'f', 'f', 'f'],
  ['t', 't', 'f', 't'],
  ['f', 'f', 'f', 'f'],
  ['f', 'f', 'f', 'f']
];
console.log(solveMaze(maze, new Point(3, 0), new Point(0, 0)));
