/**
 * The key intuition to solve the problem is that given
 * a number of stairs n, if we know the number ways to
 * get to the points [n-1] and [n-2] respectively,
 * denoted as n1 and n2 , then the total ways to get to
 * the point [n] is n1 + n2. Because from the [n-1] point,
 * we can take one single step to reach [n].
 * And from the [n-2] point, we could take two steps to
 * get there.
 */
function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let first = 1;
  let second = 2;
  let cur = 0;

  for (let i = 3; i <= n; i++) {
    cur = first + second;
    first = second;
    second = cur;
  }

  return cur;
}

// dp table.
// actually worse than just using 3 variables interms of space complexity
// but easier to think of & more generic
function climbStairs2(n: number): number {
  const dp: number[] = [];
  dp[1] = 1;
  dp[2] = 2;

  let count = 3;
  while (count < n) {
    dp[count] = dp[count - 1] + dp[count - 2];
    count++;
  }

  return dp[n];
}
