// bfs
// time: O(mn)
// space: O(mn)
function numIslands(grid: string[][]): number {
  const height = grid.length;
  const width = grid[0].length;

  let count = 0;

  const sink = (start: [number, number]) => {
    const q: number[][] = [start];

    grid[start[0]][start[1]] = '0';

    while (q.length) {
      const cur = q.shift() as [number, number];
      const [y, x] = cur;

      const up = y - 1 < 0 ? null : [y - 1, x];
      const down = y + 1 > height - 1 ? null : [y + 1, x];
      const left = x - 1 < 0 ? null : [y, x - 1];
      const right = x + 1 > width - 1 ? null : [y, x + 1];

      const opions = [left, right, up, down];

      for (const option of opions) {
        if (option && grid[option[0]][option[1]] === '1') {
          grid[option[0]][option[1]] = '0';
          q.push(option);
        }
      }
    }
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === '1') {
        count++;
        sink([y, x]);
      }
    }
  }

  return count;
}

// dfs
// time: O(mn)
// space: O(mn)
function numIslands2(grid: string[][]): number {
  const height = grid.length;
  const width = grid[0].length;

  let count = 0;

  const dfs = (y: number, x: number) => {
    if (y < 0 || x < 0 || y >= height || x >= width || grid[y][x] === '0') {
      return;
    }

    grid[y][x] = '0';
    dfs(y - 1, x);
    dfs(y + 1, x);
    dfs(y, x - 1);
    dfs(y, x + 1);
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === '1') {
        count++;
        dfs(y, x);
      }
    }
  }

  return count;
}
