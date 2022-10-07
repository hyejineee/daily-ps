const solution = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let sum = n;
    for (let j = i; j <= n; j++) {
      sum -= j;

      if (sum < 0) break;
      if (sum === 0) {
        count++;
        break;
      }
    }
  }
  return count;
};

test(`숫자의 표현`, () => {
  expect(solution(15)).toEqual(4);
});
