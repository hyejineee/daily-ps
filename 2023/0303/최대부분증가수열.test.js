const solution = (n, arr) => {
  const dp = Array(arr.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[i]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
};

test(`최대 부분 증가수열`, () => {
  expect(solution(8, [5, 3, 7, 8, 6, 2, 9, 4])).toEqual(4);
});
