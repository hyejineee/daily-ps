const solution = (x, y, n) => {
  const queue = [[y, 0]];

  while (queue.length > 0) {
    const [result, count] = queue.shift();

    if (result === x) return count;

    if (result > x) {
      if (result % 2 === 0) queue.push([result / 2, count + 1]);
      if (result % 3 === 0) queue.push([result / 3, count + 1]);
      queue.push([result - n, count + 1]);
    }
  }

  return -1;
};

test(`숫자 변환하기`, () => {
  expect(solution(10, 40, 5)).toEqual(2);
  expect(solution(10, 40, 30)).toEqual(1);
  expect(solution(2, 5, 4)).toEqual(-1);
});
