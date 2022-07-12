function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (sum: number, cur: number[], curIdx: number) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      // push to res properly, other wise cur may change using res.push(cur)
      res.push([...cur]);
      return;
    }

    for (let i = curIdx; i < candidates.length; i++) {
      // avoid duplicates
      if (i != curIdx && candidates[i] === candidates[i - 1]) {
        continue;
      }
      cur.push(candidates[i]);
      backtrack(sum + candidates[i], cur, i + 1);
      cur.pop();
    }
  };
  backtrack(0, [], 0);
  return res;
}
