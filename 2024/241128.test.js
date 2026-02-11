function solution(matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  const dp = matrix.map((row) => row.map(Number));
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === 0) continue;

      if (i > 0 && j > 0) {
        dp[i][j] += Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }

      max = Math.max(max, dp[i][j]);
    }
  }

  return max * max;
}

test("solution", () => {
  expect(
    solution([
      ["0", "1"],
      ["1", "0"],
    ])
  ).toBe(1);

  expect(
    solution([
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ])
  ).toBe(4);

  expect(
    solution([
      ["0", "0", "0", "1", "0", "1", "0"],
      ["0", "1", "0", "0", "0", "0", "0"],
      ["0", "1", "0", "1", "0", "0", "1"],
      ["0", "0", "1", "1", "0", "0", "1"],
      ["1", "1", "1", "1", "1", "1", "0"],
      ["1", "0", "0", "1", "0", "1", "1"],
      ["0", "1", "0", "0", "1", "0", "1"],
      ["1", "1", "0", "1", "1", "1", "0"],
      ["1", "0", "1", "0", "1", "0", "1"],
      ["1", "1", "1", "0", "0", "0", "0"],
    ])
  ).toBe(4);
});
