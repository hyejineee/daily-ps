const { solution } = require("./2n타일링2");

test("예제 1", () => {
  expect(solution(2)).toBe(3);
});

test("예제 2", () => {
  expect(solution(8)).toBe(171);
});

test("예제 3", () => {
  expect(solution(12)).toBe(2731);
});
