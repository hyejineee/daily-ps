const solution = (n, k) => {
  const q = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  let i = 0;
  while (q.length !== 1) {
    i++;
    if (i % k === 0) q.shift();
    else q.push(q.shift());
  }

  return q[0];
};

describe("공주 구하기", () => {
  test(`solution`, () => {
    expect(solution(8, 3)).toEqual(7);
  });
});
