const solution = (n, k) => {
  const dp = Array(21).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < 21; i++) {
    dp[i] = dp[i - 1] * i;
  }

  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  const result = [];

  let kth = k - 1;
  while (arr.length) {
    if (kth === 0) {
      result.push(...arr);
      break;
    }

    const index = Math.floor(kth / dp[arr.length - 1]);
    kth = kth % dp[arr.length - 1];

    result.push(arr[index]);
    arr.splice(index, 1);
  }

  return result;
};

test(`줄 서는 방법`, () => {
  expect(solution(3, 5)).toEqual([3, 1, 2]);
  expect(solution(4, 22)).toEqual([4, 2, 3, 1]);
});


// 참고 : https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%A4%84-%EC%84%9C%EB%8A%94-%EB%B0%A9%EB%B2%95-JS