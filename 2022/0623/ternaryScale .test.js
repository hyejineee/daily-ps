const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

test(`3진법 뒤집기`, () => {
  expect(solution(125)).toEqual(229);
  expect(solution(45)).toEqual(7);
});
