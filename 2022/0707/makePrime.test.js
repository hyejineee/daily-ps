const solution = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          count++;
        }
      }
    }
  }
  return count;
};

// 소수 판별
const isPrime = (num) => {
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
test(`소수 만들기`, () => {
  expect(solution([1, 2, 3, 4])).toEqual(1);
  expect(solution([1, 2, 7, 6, 4])).toEqual(4);
});
