const solution = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[1] = 2;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

test(`돌다리 건너기`, () => {
  expect(solution(7)).toEqual(34);
});
