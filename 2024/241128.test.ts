// function solution(matrix: string[][]): number {
//   const m = matrix.length;
//   const n = matrix[0].length;

//   const dp = Array(m)
//     .fill(0)
//     .map((_, i) =>
//       Array(n)
//         .fill(0)
//         .map((_, j) => Number(matrix[i][j]))
//     );

//   let max = 0;

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       const current = dp[i][j];
//       const [x, y, z] = [
//         dp?.[i]?.[j - 1] || 0,
//         dp?.[i - 1]?.[j] || 0,
//         dp?.[i - 1]?.[j - 1] || 0,
//       ];

//       if (current === 0) continue;

//       if (x <= 0 && y <= 0 && z <= 0) {
//         max = Math.max(max, 1);
//         continue;
//       }

//       const min = Math.min(x, y, z);
//       dp[i][j] = min + current;
//       max = Math.max(max, dp[i][j]);
//     }
//   }

//   return max * max;
// }

function solution(matrix: string[][]): number {
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
