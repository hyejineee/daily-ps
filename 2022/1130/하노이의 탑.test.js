const solution = (n) => {
  const result = [];
  hanoi(n, 1, 3, 2, result);
  return result;
};

const hanoi = (n, from, to, temp, result) => {
  if (n === 1) {
    result.push([from, to]);
    return;
  }

  hanoi(n - 1, from, temp, to, result);
  result.push([from, to]);
  hanoi(n - 1, temp, to, from, result);
};

test(`하노이의 탑`, () => {
  expect(solution(2)).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
});
