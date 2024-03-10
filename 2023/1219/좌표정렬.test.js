const solution = (arr) => {
  return [...arr].sort(([a1, b1], [a2, b2]) => {
    if (a1 === a2) return b1 - b2;
    return a1 - a2;
  });
};

describe("좌표정렬", () => {
  test(`solution`, () => {
    expect(
      solution([
        [2, 7],
        [1, 3],
        [1, 2],
        [2, 5],
        [3, 6],
      ])
    ).toEqual([
      [1, 2],
      [1, 3],
      [2, 5],
      [2, 7],
      [3, 6],
    ]);
  });
});
