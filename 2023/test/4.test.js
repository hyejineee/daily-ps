const solution = (area) => {
  const divisor = [];

  for (let i = 1; i <= area; i++) {
    if (area % i === 0) divisor.push(i);
  }

  const center = parseInt(divisor.length / 2);

  return divisor.length % 2 === 0
    ? [divisor[center - 1], divisor[center]]
    : [divisor[center], divisor[center]];
};

describe("4", () => {
  test(`solution`, () => {
    expect(solution(4)).toEqual([2, 2]);
  });
});
