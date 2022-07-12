const solution = (lottos, win_nums) => {
  const ranking = [6, 6, 5, 4, 3, 2, 1];
  const countOfCorrect = win_nums.filter((e) => lottos.includes(e)).length;
  const countOfZero = lottos.filter((e) => e === 0).length;

  return [ranking[countOfCorrect + countOfZero], ranking[countOfCorrect]];
};

test(`로또 최고 순위와 최저 순위`, () => {
  expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([
    3, 5,
  ]);

  expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).toEqual([
    1, 6,
  ]);
  expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toEqual([
    1, 1,
  ]);
});
