const solution = (land) => {
  const dp = Array(land.length)
    .fill(0)
    .map((_, i) => Array.from({ length: 4 }, (_, j) => land[i][j]));

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        dp[i][j] = Math.max(dp[i][j], land[i][j] + dp[i - 1][k]);
      }
    }
  }

  return Math.max(...dp[dp.length - 1]);
};

test(`땅따먹기`, () => {
  expect(
    solution([
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ])
  ).toEqual(16);
});
