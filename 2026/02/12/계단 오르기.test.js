const { solution } = require("./계단 오르기");

test("예제 1", () => {
  const input = `6
10
20
15
25
10
20`;
  expect(solution(input)).toBe(75);
});
