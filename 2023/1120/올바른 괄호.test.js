const solution = (str) => {
  return [...str].reduce((acc, cur) => {
    cur === "(" ? acc++ : acc--;
  }, 0) === 0
    ? "YES"
    : "NO";
};

describe("올바른 괄호", () => {
  test(`solution`, () => {
    expect(solution("(()(()))(()")).toEqual("NO");
  });
});
