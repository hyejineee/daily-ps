const { solution } = require("./2n타일링");

test("예제 1", () => {
  expect(solution(2)).toBe(2);
});

test("예제 2", () => {
  expect(solution(9)).toBe(55);
});
