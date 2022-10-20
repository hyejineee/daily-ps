const solution = (n, k) => {
  const isPrime = (num) => {
    let i = 2;
    while (i * i <= num) {
      if (num % i === 0) return false;
      i++;
    }
    return true;
  };

  return n
    .toString(k)
    .split("0")
    .filter((e) => Number(e) > 1 && isPrime(Number(e))).length;
};

test(`k진수에서 소수 개수 구하기`, () => {
  expect(solution(437674, 3)).toEqual(3);
  expect(solution(110011, 10)).toEqual(2);
});
