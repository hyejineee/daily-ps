const solution = (n, left, right) => {
  return Array.from(
    { length: right - left + 1 },
    (_, i) => Math.max(parseInt((i + left) / n), (i + left) % n) + 1
  );
};

test(`2^n 배열 자르기`, () => {
  expect(solution(3, 2, 5)).toEqual([3, 2, 2, 3]);
  expect(solution(4, 7, 14)).toEqual([4, 3, 3, 3, 4, 4, 4, 4]);
});
