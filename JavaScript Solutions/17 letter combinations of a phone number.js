/**
 * @param {string} digits
 * @return {string[]}
 */
// dfs
// Time complexity here is O(4^N * N) where N is the length of the input string.
// There's really no way around a brute force response here, as there will be up to 4^N results in the answer array
// and each one is a string N characters long. (takes O(n) time to build)
// The recursive helper function itself will be called up to 4^N * N / (N - 1) times.
var letterCombinations = function (digits) {
  const keyMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const res = [];
  if (!digits.length) {
    return res;
  }

  const dfs = (comb) => {
    if (comb.length === digits.length) {
      res.push(comb);
      return;
    }

    const curDigit = comb.length > 0 ? digits[comb.length] : digits[0];
    const keys = keyMap[curDigit];
    for (let i = 0; i < keys.length; i++) {
      comb += keys[i];
      dfs(comb);
      comb = comb.slice(0, -1);
    }
  };

  dfs('');

  return res;
};
