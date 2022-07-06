const { count } = require("yargs");

const solution = (answers) => {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const countArray = [
    { index: 1, count: 0 },
    { index: 2, count: 0 },
    { index: 3, count: 0 },
  ];

  answers.forEach((e, i) => {
    if (e == supo1[i % supo1.length]) {
      countArray[0].count++;
    }

    if (e == supo2[i % supo2.length]) {
      countArray[1].count++;
    }
    if (e == supo3[i % supo3.length]) {
      countArray[2].count++;
    }
  });

  return countArray
    .filter((e) => e.count === Math.max(...countArray.map((v) => v.count)))
    .map((e) => e.index);
};

test(`모의고사`, () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
  expect(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])).toEqual([3]);
});
