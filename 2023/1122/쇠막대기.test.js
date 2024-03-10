const solution = (str) => {
  let count = 0;
  const stack = ["("];

  for (let i = 1; i < str.length; i++) {
    const cur = str[i];
    const prev = str[i - 1];

    if (cur === ")") {
      if (prev === "(") {
        stack.pop();
        count += stack.length;
      } else {
        count += 1;
        stack.pop();
      }
    }

    if (str[i] === "(") stack.push("(");
  }

  return count;
};

describe("쇠막대기", () => {
  test(`solution`, () => {
    expect(solution("()(((()())(())()))(())")).toEqual(17);
    expect(solution("(((()(()()))(())()))(()())")).toEqual(24);
  });
});
