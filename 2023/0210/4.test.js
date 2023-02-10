const solution = (play_list, listen_time) => {
  const sum = play_list.reduce((acc, cur) => acc + cur, 0);

  if (sum < listen_time) return play_list.length;
};

test(`문제 4`, () => {
  expect(solution([2, 3, 1, 4], 3)).toEqual(3);
  expect(solution([1, 2, 3, 4], 5)).toEqual(4);
});
