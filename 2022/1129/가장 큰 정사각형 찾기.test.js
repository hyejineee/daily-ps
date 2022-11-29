const solution = (board) => {
  const n = board.length;
  const m = board[0].length;

  const dp = Array(n)
    .fill(0)
    .map((_, i) => [...board[i]]);

  dp.unshift(Array(m).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i].unshift(0);
  }

  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === 0) continue;

      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;

      if (dp[i][j] > max) {
        max = dp[i][j];
      }
    }
  }

  return max ** 2;
};

// 시간초과
// const solution = (board) => {
//   const n = board.length;
//   let max = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 0) continue;

//       for (let k = max; k <= n; k++) {
//         const arr = crop(k, board, i, j);

//         if (arr.length < k * k) break;
//         if (!arr.every((e) => e === 1)) break;

//         max = k;
//       }
//     }
//   }

//   return max * max;
// };

// const crop = (size, board, si, sj) => {
//   const arr = [];
//   for (let i = 0; i < size; i++) {
//     if (!board[si + i]) break;
//     arr.push(...board[si + i].slice(sj, sj + size));
//   }
//   return arr;
// };

test(`가장 큰 정사각형  찾기`, () => {
  // expect(
  //   solution([
  //     [0, 1, 1, 1],
  //     [1, 1, 1, 1],
  //     [1, 1, 1, 1],
  //     [0, 0, 1, 0],
  //   ])
  // ).toEqual(9);

  expect(
    solution([
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ])
  ).toEqual(4);
});
