/**
 * @param {number} n
 * @return {number}
 */
// dp
var numSquares = function (n) {
  const dp = [0];

  for (let i = 1; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};

// BFS
var numSquares = function (n) {
  if (n === 0) {
    return 0;
  }

  const q = [n];
  const visited = new Set();
  let level = 1;

  while (q.length) {
    // important! avoid not exiting loop due to dynamically changing q
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const cur = q.shift();
      for (let j = 1; j ** 2 <= cur; j++) {
        const diff = cur - j ** 2;
        if (diff === 0) {
          return level;
        }
        if (!visited.has(diff)) {
          visited.add(diff);
          q.push(diff);
        }
      }
    }
    level++;
  }
  return level;
};

// another bfs implementation
var numSquares = function (n) {
  if (n === 0) return 0;

  const squares = [];
  const queue = [n];
  let level = 1;
  var visited = new Set();
  for (let i = 1; i ** 2 <= n; i++) {
    squares.push(i ** 2);
  }

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const num = queue.shift();
      for (let sq of squares) {
        const diff = num - sq;
        if (diff < 0) continue;
        if (diff === 0) {
          return level;
        }
        if (!visited.has(diff)) {
          visited.add(diff);
          queue.push(diff);
        }
      }
    }
    level++;
  }
  return level;
};
