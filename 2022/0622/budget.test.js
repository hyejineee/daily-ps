const solution = (d, budget) => {
  return d
    .sort((a, b) => a - b)
    .reduce(
      (acc, cur) => {
        acc["sum"] += cur;
        if (acc["sum"] <= budget) {
          acc["count"]++;
        }
        return acc;
      },
      { count: 0, sum: 0 }
    )["count"];
};

test(`예산`, () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toEqual(3);
});
