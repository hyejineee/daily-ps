const solution = (absolutes, signs) => {
  return absolutes.reduce(
    (acc, cur, i) => (signs[i] ? acc + cur : acc - cur),
    0
  );
};

test(`음양 더하기`, () => {
  expect(solution([4, 7, 12], [true, false, true])).toEqual(9);
  expect(solution([1, 2, 3], [false, false, true])).toEqual(0);
});
