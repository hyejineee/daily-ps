const solution = (lotteries) => {
  return lotteries
    .map(([winner, buyers, money], index) => {
      if (winner >= buyers + 1) return [100, money, index + 1];
      return [(winner / (buyers + 1)) * 100, money, index + 1];
    })
    .sort((a, b) => {
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      if (a[1] > b[1]) return -1;
      return 1;
    })[0][2];
};

test(`문제 1`, () => {
  expect(
    solution([
      [100, 100, 500],
      [1000, 1000, 100],
    ])
  ).toEqual(2);
});
