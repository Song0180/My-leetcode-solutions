// recursive O(logN)
function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  }

  return x * myPow(x * x, (n - 1) / 2);
}

// iterative O(logN)
function myPow2(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let res = 1;

  while (n > 0) {
    if ((n & 1) === 1) {
      res *= x;
    }
    // n >>= 1; does not work when integer overflows (i.e. +2^31)
    n = Math.floor(n / 2);

    x *= x;
  }

  return res;
}
