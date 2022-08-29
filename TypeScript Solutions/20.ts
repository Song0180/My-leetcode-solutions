function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const c of s) {
    if (c in map) {
      stack.push(c);
    } else {
      const last = stack.pop() as string;
      if (map[last] !== c) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
