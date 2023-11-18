const { sort } = require("semver");

const solution = (arr, budget) => {
  const c = arr.length;
  const prices = arr.map(([a, b]) => a + b);
  const discounted = arr.map(([a, b]) => Math.floor(a / 2) + b);
  let max = 0;

  for (let i = 0; i < c; i++) {
    const ps = [...prices];
    ps[i] = discounted[i];
    ps.sort((a, b) => a - b);

    let sum = 0;
    let j = 0;
    while (sum < budget) {
      sum += ps[j++];
      if (sum > budget) max = Math.max(max, j);
    }
  }

  return max;
};

describe("졸업선물", () => {
  test(`solution`, () => {
    expect(
      solution(
        [
          [6, 6],
          [2, 2],
          [4, 3],
          [4, 5],
          [10, 3],
        ],
        28
      )
    ).toEqual(4);
  });
});
