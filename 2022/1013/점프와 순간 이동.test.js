const solution = (n) => {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }

    n -= 1;
    count++;
  }
  return count;
};

test(`점프와 순간 이동`, () => {
  expect(solution(5)).toEqual(2);
  expect(solution(6)).toEqual(2);
  expect(solution(5000)).toEqual(5);
});
