const solution = (numbers, target) => {
  const count = [0];
  const sign = [+1, -1];

  sign.forEach((e) => calc(numbers[0] * e, numbers, 0, target, count));

  return count[0];
};

const calc = (num, numbers, curIndex, target, count) => {
  if (curIndex === numbers.length - 1) {
    if (num === target) count[0]++;
    return;
  }

  const sign = [+1, -1];
  const ni = curIndex + 1;

  sign.forEach((e) => calc(num + numbers[ni] * e, numbers, ni, target, count));
};

test(`타겟 넘버`, () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toEqual(5);
  expect(solution([4, 1, 2, 1], 4)).toEqual(2);
});
