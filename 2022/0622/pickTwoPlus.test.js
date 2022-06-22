const solution = (numbers) => {
  const result = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }
  return [...result].sort((a, b) => a - b);
};

test(`두 개 뽑아서 더하기`, () => {
  expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
