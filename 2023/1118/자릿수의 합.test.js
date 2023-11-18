const solution = (arr) => {
  const max = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    const sum = getSum(arr[i]);

    if (max[0] === sum) {
      if (max[1] < arr[i]) max[1] = arr[i];
    }

    if (max[0] < sum) {
      max[0] = sum;
      max[1] = arr[i];
    }
  }

  return max[1];
};

const getSum = (num) => {
  let s = num;
  let sum = 0;
  while (s !== 0) {
    sum += s % 10;
    s = Math.floor(s / 10);
  }

  return sum;
};

describe("자릿수의 합", () => {
  test(`getSum`, () => {
    expect(getSum(123)).toEqual(6);
  });

  test(`solution`, () => {
    expect(solution([128, 460, 603, 40, 521, 137, 123])).toEqual(137);
  });
});
