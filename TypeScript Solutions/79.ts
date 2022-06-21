// accepted but slow
// backtracking, somewhat brute force
// accepted but slow
// backtracking, somewhat brute force
function exist(board: string[][], word: string): boolean {
  // O(m * n)
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === word[0]) {
        if (word.length === 1) {
          return board[y][x] === word;
        }

        if (next([y, x], word.slice(1), board)) {
          return true;
        }
      }
    }
  }

  return false;
}

function next(curCoord: number[], word: string, board: string[][]) {
  const target = word[0];

  const [curY, curX] = curCoord;
  const left = curX - 1 >= 0 ? [curY, curX - 1] : null;
  const right = curX + 1 < board[0].length ? [curY, curX + 1] : null;
  const up = curY - 1 >= 0 ? [curY - 1, curX] : null;
  const down = curY + 1 < board.length ? [curY + 1, curX] : null;

  const nextCoords = [left, right, up, down];

  let result = false;

  for (let nextCoord of nextCoords) {
    if (result === true) {
      continue;
    }
    if (nextCoord && board[nextCoord[0]][nextCoord[1]] === target) {
      if (word.length === 1) {
        result = true;
        break;
      } else {
        const memo = board[curY][curX];
        // mark as visited
        board[curY][curX] = '*';
        result = next(nextCoord, word.slice(1), board);
        // restore as unvisited for backtracking
        if (!result) {
          board[curY][curX] = memo;
        }
      }
    }
  }
  return result;
}
