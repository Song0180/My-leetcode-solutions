// not very efficient dfs
function pacificAtlantic(heights: number[][]): number[][] {
  const res: number[][] = [];
  const rows = heights.length;
  const cols = heights[0].length;

  const dfs = (curCell: number[], pas: Set<string>, atl: Set<string>) => {
    if (pas.size > 0 && atl.size > 0) {
      return;
    }
    const [curRow, curCol] = curCell;
    const curHeight = heights[curRow][curCol];
    if (curRow === 0 || curCol === 0) {
      pas.add(JSON.stringify(curCell));
    }

    if (curCol === cols - 1 || curRow === rows - 1) {
      atl.add(JSON.stringify(curCell));
    }

    heights[curRow][curCol] = Infinity;

    if (curRow - 1 >= 0 && heights[curRow - 1][curCol] <= curHeight) {
      dfs([curRow - 1, curCol], pas, atl);
    }
    if (curRow + 1 <= rows - 1 && heights[curRow + 1][curCol] <= curHeight) {
      dfs([curRow + 1, curCol], pas, atl);
    }
    if (curCol - 1 >= 0 && heights[curRow][curCol - 1] <= curHeight) {
      dfs([curRow, curCol - 1], pas, atl);
    }
    if (curCol + 1 <= cols - 1 && heights[curRow][curCol + 1] <= curHeight) {
      dfs([curRow, curCol + 1], pas, atl);
    }

    heights[curRow][curCol] = curHeight;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const pas = new Set<string>();
      const atl = new Set<string>();
      dfs([row, col], pas, atl);
      if (pas.size > 0 && atl.size > 0) {
        res.push([row, col]);
      }
    }
  }

  return res;
}

function pacificAtlantic2(heights: number[][]): number[][] {
  const res: number[][] = [];
  const rows = heights.length;
  const cols = heights[0].length;
  const dfs = (
    row: number,
    col: number,
    visited: boolean[][],
    prevHeight: number
  ) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      visited[row][col] ||
      prevHeight > heights[row][col] // from lower altitude to higher
    ) {
      return;
    }
    const curHeight = heights[row][col];
    visited[row][col] = true;
    dfs(row + 1, col, visited, curHeight);
    dfs(row - 1, col, visited, curHeight);
    dfs(row, col + 1, visited, curHeight);
    dfs(row, col - 1, visited, curHeight);
  };

  const pac: boolean[][] = Array.from(Array(rows), () =>
    new Array(cols).fill(false)
  );
  const atl: boolean[][] = Array.from(Array(rows), () =>
    new Array(cols).fill(false)
  );

  for (let col = 0; col < cols; col++) {
    dfs(0, col, pac, heights[0][col]);
    dfs(rows - 1, col, atl, heights[rows - 1][col]);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pac, heights[row][0]);
    dfs(row, cols - 1, atl, heights[row][cols - 1]);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pac[i][j] && atl[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
}
