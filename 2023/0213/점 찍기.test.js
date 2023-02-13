const solution = (k, d) => {
  let a = 0;
  let result = 0;
  while (a * k <= d) {
    const x = a * k;
    const yMax = Math.floor(Math.sqrt(d ** 2 - x ** 2));

    result += Math.floor(yMax / k) + 1;
    a++;
  }
  return result;
};

test(`점 찍기`, () => {
  expect(solution(2, 4)).toEqual(6);
  expect(solution(1, 5)).toEqual(26);
});
