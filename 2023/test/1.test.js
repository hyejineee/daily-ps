const solution = (s) => {
  return s
    .split("")
    .reduce((acc, cur) => {
      const pop = acc[acc.length - 1];
      if (cur === pop) acc.pop();
      else acc.push(cur);
      return acc;
    }, [])
    .join("");
};

describe("1", () => {
  test(`solution`, () => {
    expect(solution("aacddefg")).toEqual("cefg");
  });
});
