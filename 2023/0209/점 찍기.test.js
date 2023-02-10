const solution = (k, d) => {
  const arr = Array(parseInt(d / k) + 1)
    .fill(0)
    .map((_, i) => (i * k) ** 2);
  console.log(arr);
};

test(`점 찍기`, () => {
  expect(solution(2, 4)).toEqual(6);
  expect(solution(1, 5)).toEqual(26);
});
