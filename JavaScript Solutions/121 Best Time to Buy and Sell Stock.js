// O(n)
var maxProfit = function (prices) {
  if (!prices) {
    return 0;
  }

  let min = 100000;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

// another implementation
var maxProfit = function (prices) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

// original DP implementation: space O(n) for the dp array
var maxProfit = function (prices) {
  const dp = [];
  for (let i = 0; i < prices.length; i++) {
    dp.push(0);
  }
  // basecase
  let min = prices[0];

  // state change
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return dp[dp.length - 1];
};
