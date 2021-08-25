/**
 * @param {character[][]} grid
 * @return {number}
 */
// dfs
// Time Complexity: O(m*n)
// Space Complexity: O(m*n), if the entire grid is one island, it will take up m*n space in function call stack
var numIslands = function (grid) {
  let count = 0;
  if (!grid || !grid.length) {
    return count;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        // dfs will traverse all land of this island and sink them to avoid counting again
        dfs(grid, row, col);
        count++;
      }
    }
  }

  return count;
};

const dfs = (grid, row, col) => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === '0'
  ) {
    return;
  }

  // sink the land of the visited island to avoid counting again
  grid[row][col] = '0';

  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
};

// bfs
// Time Complexity: O(m*n)
// Space Complexity: O(m*n), queue might contain m*n elements if the entire grid is one island
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  if (!grid || !grid.length) {
    return count;
  }

  const bfs = (queue) => {
    while (queue.length > 0) {
      let [row, col] = queue.shift();
      if (
        row < 0 ||
        row >= grid.length ||
        col < 0 ||
        col >= grid[row].length ||
        grid[row][col] === '0'
      ) {
        continue;
      }
      // sink the land
      grid[row][col] = '0';

      queue.push(
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
      );
      console.log(queue);
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        bfs([[row, col]]);
        count++;
      }
    }
  }

  return count;
};
