function wordBreak(s: string, wordDict: string[]): boolean {
  const valid = [true];

  // pointer 1
  for (let i = 1; i <= s.length; i++) {
    let cur = false;
    // pointer 2
    for (let j = 0; j < i; j++) {
      if (valid[j] && wordDict.includes(s.substring(j, i))) {
        // given pointer 1, as long as there is one pointer 2
        // such that the left of the pointer 2 is valid, and the right side is in dict
        // it means pointer 1 is able to break words properly
        cur = true;
      }
    }
    valid.push(cur);
  }
  // check if the whole string can be segemented
  return valid[valid.length - 1];
}
