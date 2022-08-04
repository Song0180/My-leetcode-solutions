// dfs
// time complexity: O(m*n) since we traverse the map once
// Space Complexity: O(L) where L is the size of the largest island,
// representing the maximum recursion stack
// or O(N * M + L) if we create an N * M matrix in order to not modify the input
function maxAreaOfIsland(grid: number[][]): number {
  let res = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        res = Math.max(res, dfs(grid, y, x));
      }
    }
  }
  return res;
}

const dfs = (grid: number[][], y: number, x: number) => {
  if (
    y < 0 ||
    y >= grid.length ||
    x < 0 ||
    x >= grid[y].length ||
    grid[y][x] === 0
  ) {
    return 0;
  }
  grid[y][x] = 0;
  return (
    1 +
    dfs(grid, y + 1, x) +
    dfs(grid, y - 1, x) +
    dfs(grid, y, x + 1) +
    dfs(grid, y, x - 1)
  );
};
