function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const backtracking = (candidates: number[], cur: number[], sum: number) => {
    if (sum === target) {
      res.push(cur.slice());
      return;
    }

    if (sum > target) {
      return;
    }

    for (const candidate of candidates) {
      const prev = cur[cur.length - 1] ?? 0;
      // For avoiding duplicates;
      // Only the same or a larger candidate should be used.
      // Smaller ones are already considered.
      if (candidate >= prev) {
        cur.push(candidate);
        backtracking(candidates, cur, sum + candidate);
        cur.pop();
      }
    }
  };

  backtracking(candidates, [], 0);

  return res;
}
