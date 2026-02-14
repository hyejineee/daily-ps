const { solution } = require("./동전1");

test("예제 1", () => {
  const input = `3 10
1
2
5`;
  expect(solution(input)).toBe(10);
});
