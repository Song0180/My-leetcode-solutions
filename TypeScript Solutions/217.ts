function containsDuplicate(nums: number[]): boolean {
  const hash = new Set<number>();
  for (const num of nums) {
    if (hash.has(num)) {
      return true;
    }
    hash.add(num);
  }
  return false;
}
