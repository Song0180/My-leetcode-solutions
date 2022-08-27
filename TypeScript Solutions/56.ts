// time complexity: O(nlogn)
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [curStart, curEnd] = intervals[i];
    const prevEnd = res[res.length - 1][1];
    if (curStart <= prevEnd) {
      res[res.length - 1][1] = Math.max(curEnd, prevEnd);
    } else {
      res.push([curStart, curEnd]);
    }
  }
  return res;
}
