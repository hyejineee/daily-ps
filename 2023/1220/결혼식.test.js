const solution = (arr) => {
  const sorted = [...arr].sort(([, a], [, b]) => a - b);

  let maxCount = 0,
    count = 1,
    et = sorted[0][1];

  for (let i = 1; i < arr.length; i++) {
    const [s, e] = sorted[i];
    if (s < et) {
      count++;
      if (e > et) {
        maxCount = Math.max(maxCount, count);
        count = 1;
      }
    }
  }
  return maxCount;
};

describe("결혼식", () => {
  test(`solution`, () => {
    expect(
      solution([
        [14, 18],
        [12, 15],
        [15, 20],
        [20, 30],
        [5, 14],
      ])
    ).toEqual(2);
  });
});
