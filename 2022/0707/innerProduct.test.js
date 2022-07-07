const solution = (a, b) => {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
};

test(`내적`, () => {
  expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])).toEqual(3);
  expect(solution([-1, 0, 1], [1, 0, -1])).toEqual(-2);
});
