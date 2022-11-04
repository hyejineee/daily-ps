const solution = (orders, course) => {
  const result = [];

  course.forEach((count) => {
    const combi = orders.map((e) => {
      const result = [];
      combination([...e].sort(), 0, [], result, count);
      return result.flat();
    });

    let max = 0;
    Object.entries(countMenu(combi.flat()))
      .filter(([k, v]) => v >= 2)
      .sort((a, b) => b[1] - a[1])
      .forEach(([k, v], i) => {
        if (i === 0) max = v;

        if (max <= v) {
          result.push(k);
        }
      });
  });

  return result.sort();
};

const countMenu = (arr) => {
  const map = new Map();

  arr.forEach((e) => {
    map[e] !== undefined ? map[e]++ : (map[e] = 1);
  });

  return map;
};

const combination = (arr, index, temp, result, limit) => {
  if (temp.length === limit) {
    result.push(temp.join(""));
    return;
  }

  for (let i = index; i < arr.length; i++) {
    temp.push(arr[i]);
    combination(arr, i + 1, temp, result, limit);
    temp.pop();
  }
};

test(`메뉴 리뉴얼`, () => {
  expect(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
  ).toEqual(["AC", "ACDE", "BCFG", "CDE"]);

  expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});
