const { solution } = require("./파도반수열");

test("예제 1", () => {
  const testCases = [6, 12];
  const expected = `3
16`;
  expect(solution(testCases)).toEqual(expected);
});
