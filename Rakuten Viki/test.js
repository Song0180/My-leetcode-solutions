function solution(ranks) {
  let count = 0;
  const map = new Map();
  for (const rank of ranks) {
    if (map.has(rank)) {
      map.set(rank, map.get(rank) + 1);
    } else {
      map.set(rank, 1);
    }
  }
  for (const [rank, _] of map) {
    if (map.has(rank + 1)) {
      count += map.get(rank);
    }
  }
  return count;
}
