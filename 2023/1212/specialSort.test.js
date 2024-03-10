const solution = (arr) => {
  return arr
    .reduce(
      (acc, cur) => {
        if (cur < 0) acc[0].push(cur);
        else acc[1].push(cur);
        return acc;
      },
      [[], []]
    )
    .flat();
};

describe("specialSort", () => {
  test(`solution`, () => {
    expect(solution([1, 2, 3, -3, -2, 5, 6, -6])).toEqual([
      -3, -2, -6, 1, 2, 3, 5, 6,
    ]);
  });
});
