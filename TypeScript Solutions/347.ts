function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedMap.slice(0, k).map(([num]) => num);
}
