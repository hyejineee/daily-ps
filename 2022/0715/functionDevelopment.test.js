const solution = (progresses, speeds) => {
  const needDays = progresses.map((e, i) =>
    (100 - e) % speeds[i] === 0
      ? parseInt((100 - e) / speeds[i])
      : parseInt((100 - e) / speeds[i]) + 1
  );

  for (let i = 1; i < needDays.length; i++) {
    if (needDays[i] < needDays[i - 1]) {
      needDays[i] = needDays[i - 1];
    }
  }

  const count = {};
  needDays.forEach((e) => {
    count[e] ? count[e]++ : (count[e] = 1);
  });

  return Object.values(count);
};

test(`기능 개발`, () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([
    1, 3, 2,
  ]);
});
