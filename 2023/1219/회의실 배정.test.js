const solution = (arr) => {
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  const n = input[0];
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(input[i].split(" "));
  }

  const sorted = [...arr].sort(([a], [b]) => a - b);

  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    const [s, e] = sorted[i];
    let ps = s,
      pe = e;
    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
      const [cs, ce] = sorted[j];
      if (cs >= pe) {
        count++;
        ps = cs;
        pe = ce;
      }
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

describe("회의실 배정", () => {
  test(`solution`, () => {
    expect(
      solution([
        [1, 4],
        [2, 3],
        [3, 5],
        [4, 6],
        [5, 7],
      ])
    ).toEqual(3);

    expect(
      solution([
        [3, 3],
        [1, 3],
        [2, 3],
      ])
    ).toEqual(2);

    expect(
      solution([
        [1, 4],
        [3, 5],
        [0, 6],
        [5, 7],
        [3, 8],
        [5, 9],
        [6, 10],
        [8, 11],
        [8, 12],
        [2, 13],
        [12, 14],
      ])
    ).toEqual(4);
  });
});
