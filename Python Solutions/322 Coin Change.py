# brute force Time Limit Exceeded
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        def dp(m):
            if m == 0:
                return 0
            if m < 0:
                return -1
            numOfCoins = float('inf')
            for coin in coins:
                subProblem = dp(m-coin)
                if subProblem == -1:
                    continue
                numOfCoins = min(numOfCoins, 1 + subProblem)
            return numOfCoins if numOfCoins != float('INF') else -1

        return dp(amount)

# with memo


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        memo = dict()

        def dp(m):
            if m in memo:
                return memo[m]
            if m == 0:
                return 0
            if m < 0:
                return -1
            numOfCoins = float('inf')
            for coin in coins:
                subProblem = dp(m-coin)
                if subProblem == -1:
                    continue
                numOfCoins = min(numOfCoins, 1 + subProblem)
            memo[m] = numOfCoins if numOfCoins != float('inf') else -1
            return memo[m]
        return dp(amount)
