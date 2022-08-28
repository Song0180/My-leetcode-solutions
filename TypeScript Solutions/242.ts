function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const hash = new Map<string, number>();
  for (const c of s) {
    if (hash.has(c)) {
      hash.set(c, hash.get(c)! + 1);
    } else {
      hash.set(c, 1);
    }
  }
  for (const c of t) {
    if (!hash.has(c)) {
      return false;
    }
    hash.set(c, hash.get(c)! - 1);
    if (hash.get(c) === 0) {
      hash.delete(c);
    }
  }
  return hash.size === 0;
}
