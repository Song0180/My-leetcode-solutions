# with memo
class Solution:
    def fib(self, n: int) -> int:
        if n < 1:
            return 0
        memo = [0] * (n+1)
        return self.helper(n, memo)

    def helper(self, n: int, memo: list[int]) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        if memo[n] != 0:
            return memo[n]
        memo[n] = self.helper(n-1, memo) + self.helper(n-2, memo)
        return memo[n]

# with dp table


class Solution:
    def fib(self, n: int) -> int:
        if n < 1:
            return 0
        if n == 1 or n == 2:
            return 1
        dp = [0] * (n+1)
        dp[1] = 1
        dp[2] = 1
        for i in range(3, n+1):
            dp[i] = dp[i-1] + dp[i-2]
        return dp[n]

# further update (without using a big dp table)


class Solution:
    def fib(self, n: int) -> int:
        if n < 1:
            return 0
        if n == 1 or n == 2:
            return 1
        pre = cur = 1
        for i in range(3, n+1):
            sum = cur + pre
            pre = cur
            cur = sum
        return cur
