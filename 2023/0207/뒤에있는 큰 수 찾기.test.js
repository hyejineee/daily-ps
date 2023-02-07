const solution = (numbers) => {
  const stack = [];
  const result = Array(numbers.length).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const peek = stack[stack.length - 1];

    while (stack.length > 0 && numbers[peek] < current) {
      result[stack.pop()] = current;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    result[stack.pop()] = -1;
  }

  return result;
};

test(`뒤에 있는 큰 수 찾기`, () => {
  expect(solution([2, 3, 3, 5])).toEqual([3, 5, 5, -1]);
  expect(solution([9, 1, 5, 3, 6, 2])).toEqual([-1, 5, 6, 6, -1, -1]);
  expect(solution([8, 1, 2, 9])).toEqual([9, 2, 9, -1]);
});
