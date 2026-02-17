const { solution } = require("./123더하기");

test("예제 1", () => {
  const testCases = [4, 7, 10];
  const expected = `7
44
274`;
  expect(solution(testCases)).toEqual(expected);
});
