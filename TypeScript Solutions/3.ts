function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  let start = 0;
  let end = 1;
  let max = 0;
  const set = new Set();
  set.add(s[start]);

  while (end < s.length) {
    if (set.has(s[end])) {
      start++;
      set.clear();
      set.add(s[start]);
      end = start + 1;
    } else {
      set.add(s[end]);
      end++;
    }

    max = Math.max(max, end - start);
  }

  return max;
}

function lengthOfLongestSubstring2(s: string): number {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
    // increase l until r is not repeated
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }

    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
}
