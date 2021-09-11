/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// brute force
var divide = function (dividend, divisor) {
  const absDs = Math.abs(divisor),
    absDd = Math.abs(dividend);
  let count = 0;
  let newVal = absDd;
  if (absDd < absDs) {
    return count;
  }

  if (absDs === 1) {
    count = absDd;
  } else {
    while (newVal > 0) {
      newVal -= absDs;
      if (newVal >= 0) {
        count++;
      }
    }
  }

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    count = -count;
  }

  if (count > 2147483647) {
    count = 2147483647;
  }

  return count;
};

// fastest implementation (use bit shift & double count, think of it as binary search)
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  var isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  var count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= dividend >> 1) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  if (!isPositive) result = -result;
  return result;
};
