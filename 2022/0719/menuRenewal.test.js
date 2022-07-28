const solution = (orders, course) => {
  const result = [];

  for (let c of course) {
    const count = {};

    orders.forEach((e) =>
      combination(e.split("").sort(), 0, c, [], new Set(), count)
    );
    
    const countArr = Object.entries(count).sort((a, b) => b[1] - a[1]);

    let max = 2;
    const keys = new Set();
    for (let [k, v] of countArr) {
      if (max < v) {
        max = v;
        keys.add(k);
        continue;
      }

      if (max === v) {
        keys.add(k);
        continue;
      }
    }

    keys.forEach((e) => result.push(e));
  }

  return result.sort();
};

// 자바스크립트 조합
const combination = (arr, index, level, temp, isUsed, count) => {
  if (temp.length === level) {
    const set = [...temp].join("");
    count[set] ? count[set]++ : (count[set] = 1);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (isUsed.has(arr[i])) continue;
    isUsed.add(arr[i]);
    temp.push(arr[i]);
    combination(arr, i, level, temp, isUsed, count);
    temp.pop();
    isUsed.delete(arr[i]);
  }
};

test(`메뉴 리뉴얼`, () => {
  // expect(
  //   combination(["a", "b", "c", "e", "f"], 2, [], [], new Set())
  // ).toEqual();
  // expect(
  //   combination("", ["a", "b", "c", "e", "f"], 0, 0, 3, new Set())
  // ).toEqual();

  expect(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
  ).toEqual(["AC", "ACDE", "BCFG", "CDE"]);

  expect(
    solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
  ).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);

  expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});
