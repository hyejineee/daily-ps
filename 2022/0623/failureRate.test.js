const solution = (N, stages) => {
  return [...Array(N).keys()]
    .map((v) => {
      const { count, thanN } = getCountAndThanN(v + 1, stages);
      return { rate: count / thanN, index: v + 1 };
    })
    .sort((a, b) => b.rate - a.rate)
    .map((v) => v.index);
};

const getCountAndThanN = (n, arr) => {
  let count = 0;
  let thanN = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) count++;
    if (arr[i] >= n) thanN++;
  }

  return { count, thanN };
};

test(`실패율`, () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
  expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);

  // getCountAndThan
  expect(getCountAndThanN(1, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual({
    count: 1,
    thanN: 8,
  });
});
