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

/**
 * n = 4
 *
 * 1 + 1 + 1 + 1
 * 1 + 2 + 1
 * 2 + 1 + 1
 * 1 + 1 + 2
 * 2 + 2
 */
