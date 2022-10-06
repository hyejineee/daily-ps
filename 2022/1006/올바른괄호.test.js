const solution = (s) => {
  let result = 0;
  for (let c of s) {
    if (result === 0 && c === ")") return false;
    result += c === "(" ? 1 : -1;
  }

  return result === 0;
};

test(`올바른 괄호`, () => {
  expect(solution("()()")).toEqual(true);
  expect(solution("(())()")).toEqual(true);
  expect(solution(")()(")).toEqual(false);
  expect(solution("(()(")).toEqual(false);
});
