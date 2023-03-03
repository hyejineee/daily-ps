const solution = (coins, change) => {
  const dp = Array(change + 1).fill(100000);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= change; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }
  return dp[change];
};

test(`동전 교환`, () => {
  expect(solution([1, 3, 5], 15)).toEqual(3);
});
