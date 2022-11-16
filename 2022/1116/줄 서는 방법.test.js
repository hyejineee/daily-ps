const { readSync } = require("graceful-fs");

const solution = (n, k) => {
  const totalCases = Array(n)
    .fill(0)
    .reduce((acc, cur, index) => (index + 1) * acc, 1);

  const result = where(
    totalCases,
    k,
    Array.from({ length: n }, (_, i) => i + 1),
    n,
    []
  );

  console.log(result);

  return result;
};

const where = (totalCases, k, numbers, n, result) => {
  const cases = parseInt(totalCases / n);
  const q = parseInt(k / cases);
  const r = k % cases;

  if (k === 0 || k === 1) {
    const remain = numbers
      .filter((e) => !result.includes(e))
      .sort((a, b) => (k === 0 ? b - a : a - b));
    result.push(...remain);
    return result;
  }

  result.push(numbers[r === 0 ? q - 1 : q]);
  console.log(`q : ${q}, r : ${r}, cases : ${cases}`);
  console.log(result);

  return where(cases, r, numbers, n - 1, result);
};

test(`줄 서는 방법`, () => {
  expect(solution(3, 5)).toEqual([3, 1, 2]);
  expect(solution(4, 22)).toEqual([4, 2, 3, 1]);
});
