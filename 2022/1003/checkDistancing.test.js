const solution = (n) => {
  const arr = Array(n + 1).fill(0);

  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 3;

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
};

test(`멀리뛰기`, () => {
  expect(solution(4)).toEqual(5);
  expect(solution(3)).toEqual(3);
});
