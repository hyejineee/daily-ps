const solution = (time, arr) => {
  const dp = Array(time + 1).fill(0);

  for (let [score, t] of arr) {
    for (let j = time; j > 0; j--) {
      if (dp[j - t] === undefined) continue;
      dp[j] = Math.max(dp[j], dp[j - t] + score);
    }
  }

  return dp[time];
};

test(`최대 점수 구하기`, () => {
  expect(
    solution(20, [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ])
  ).toEqual(41);
});
