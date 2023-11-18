const solution = (arr) => {
  const record = arr[0].reduce((acc, cur, idx) => {
    acc[cur] = arr[0].slice(idx + 1);
    return acc;
  }, {});

  arr.forEach((test) => {
    for (let i = 0; i < test.length; i++) {
      const back = test.slice(i + 1) || [];
      record[test[i]] = intersection(record[test[i]], back);
    }
  });

  return Object.values(record).flat().length;
};

const intersection = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];
  return arr2.filter((e) => arr1.includes(e)) || [];
};

describe("멘토링", () => {
  test(`solution`, () => {
    expect(
      solution([
        [3, 4, 1, 2],
        [4, 3, 2, 1],
        [3, 1, 4, 2],
      ])
    ).toEqual(3);
  });
});
