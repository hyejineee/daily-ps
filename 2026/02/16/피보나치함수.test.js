const { solution } = require("./피보나치함수");

test("예제 1", () => {
  const testCases = [0, 1, 3];
  const expected = `1 0
0 1
1 2`;
  expect(solution(testCases)).toEqual(expected);
});
