function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const rows = Array.from(Array(numRows), () => [] as string[]);

  let level = 0,
    ptr = 0,
    reverse = false;
  while (ptr < s.length) {
    if (ptr > 0 && (level === numRows - 1 || level === 0)) {
      reverse = !reverse;
    }
    if (!reverse) {
      rows[level++].push(s[ptr]);
    } else {
      rows[level--].push(s[ptr]);
    }
    ptr++;
  }

  return rows.reduce((acc, cur) => acc.concat(cur.join('')), '');
}
