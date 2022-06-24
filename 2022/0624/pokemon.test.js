const solution = (nums) => {
  const half = parseInt(nums.length / 2);
  const arr = [...new Set(nums)];
  return arr.length > half ? half : arr.length;
};

test(`포켓몬`, () => {
  expect(solution([3, 3, 3, 2, 2, 4])).toEqual(3);
  expect(solution([3, 3, 3, 2, 2, 2])).toEqual(2);
  expect(solution([3, 1, 2, 3])).toEqual(2);
});
