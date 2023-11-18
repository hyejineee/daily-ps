const solution = (arr) => {
  return arr.map((e) => reverse(e)).filter((e) => isPrimeNumber(e));
};

const reverse = (num) => {
  let s = num;
  let reversedNum = 0;

  while (s !== 0) {
    const r = s % 10;
    s = Math.floor(s / 10);

    if (s !== 0) reversedNum = (reversedNum + r) * 10;
    else reversedNum += r;
  }

  return reversedNum;
};

const isPrimeNumber = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};

describe("자릿수의 합", () => {
  test(`reverse`, () => {
    expect(reverse(123)).toEqual(321);
    expect(reverse(100)).toEqual(1);
  });

  test(`isPrime`, () => {
    expect(isPrimeNumber(11)).toEqual(true);
    expect(isPrimeNumber(12)).toEqual(false);
  });

  test(`solution`, () => {
    expect(solution([32, 55, 62, 20, 250, 370, 200, 30, 100])).toEqual([
      23, 2, 73, 2, 3,
    ]);
  });
});
