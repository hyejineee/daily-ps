const main = () => {
  const fs = require('fs');
  const n = fs.readFileSync('/dev/stdin').toString().trim();

  const result = solution(n);
  console.log(result);
};

const solution = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }
  return dp[n];
};

test(`01타일`, () => {
  expect(solution(4)).toEqual(5);
});
