const solution = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};

test(`2 X N 타일링`, () => {
  expect(solution(4)).toEqual(5);
  expect(solution(5)).toEqual(8);
  expect(solution(6)).toEqual(13);
});
