const solution = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  return arr.reduce((acc, cur, idx) => {
    if (sorted[idx] !== cur) acc.push(idx + 1);
    return acc;
  }, []);
};

describe("장난꾸러기 현수", () => {
  test(`solution`, () => {
    expect(solution([120, 125, 152, 130, 135, 135, 143, 127, 160])).toEqual([
      3, 8,
    ]);
  });
});
