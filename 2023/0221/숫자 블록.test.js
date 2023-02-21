const solution = (begin, end) => {
  const result = [];

  for (let i = begin; i <= end; i++) {
    result.push(getMaxDivisor(i));
  }

  return result;
};

const getMaxDivisor = (n) => {
  if (n === 1) return 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n/i <= 1e7) {
      return n / i;
    }
  }

  return 1;
};

test(`숫자 블록`, () => {
  expect(solution(1, 10)).toEqual([0, 1, 1, 2, 1, 3, 1, 4, 3, 5]);
  expect(solution(100000014, 100000016)).toEqual([6, 5, 6250001]);
});
