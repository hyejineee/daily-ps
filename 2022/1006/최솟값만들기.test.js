const solution = (A, B) => {
  B = B.sort((a, b) => b - a);
  return A.sort((a, b) => a - b).reduce((acc, cur, i) => acc + cur * B[i], 0);
};

test(`최솟값 만들기`, () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toEqual(29);
  expect(solution([1, 2], [3, 4])).toEqual(10);
});
