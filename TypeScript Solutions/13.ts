// brute force initial thought
function romanToInt(s: string): number {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  let prevChar: null | string = null;
  const prefix = {
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C',
  };
  for (let i = s.length - 1; i >= 0; i--) {
    const curChar = s[i];
    if (prevChar && prefix[prevChar] === curChar) {
      res -= valueMap[curChar];
    } else {
      res += valueMap[curChar];
    }
    prevChar = curChar;
  }
  return res;
}

// simpler solution
function romanToInt2(s: string): number {
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    var c = s[i];
    switch (c) {
      case 'I':
        res += res >= 5 ? -1 : 1;
        break;
      case 'V':
        res += 5;
        break;
      case 'X':
        res += 10 * (res >= 50 ? -1 : 1);
        break;
      case 'L':
        res += 50;
        break;
      case 'C':
        res += 100 * (res >= 500 ? -1 : 1);
        break;
      case 'D':
        res += 500;
        break;
      case 'M':
        res += 1000;
        break;
    }
  }
  return res;
}

// clean code solution
/**
 * You don't need to map CM, XC, "IX", "IV" separately. Eg.
when you parse "MCMXCIV" to an array of integers you get:
[1000, 100, 1000, 10, 100, 1, 5], if you add them together (from left to right),
you just need to check if next number is bigger, if so then you simply subtract
that number: 1000 - 100 + 1000 - 10 + 100 - 1 + 5 = 1994.
 */
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt3(s: string): number {
  const integers = s.split('').map((c) => roman[c]);

  return integers.reduce(
    (acc, x, i) => (x < integers[i + 1] ? acc - x : acc + x),
    0
  );
}
