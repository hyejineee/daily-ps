const solution = (want, number, discount) => {
  const map = new Map();

  want.forEach((e, i) => {
    map[e] = number[i];
  });

  let count = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const copyMap = Object.assign({}, map);

    for (let j = 0; j < 10; j++) {
      copyMap[discount[i + j]]--;
    }

    if (Object.values(copyMap).every((e) => e === 0)) count++;
  }

  return count;
};

test(`할인행사`, () => {
  expect(
    solution(
      ["banana", "apple", "rice", "pork", "pot"],
      [3, 2, 2, 2, 1],
      [
        "chicken",
        "apple",
        "apple",
        "banana",
        "rice",
        "apple",
        "pork",
        "banana",
        "pork",
        "rice",
        "pot",
        "banana",
        "apple",
        "banana",
      ]
    )
  ).toEqual(3);
});
