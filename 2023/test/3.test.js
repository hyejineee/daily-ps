const solution = (s) => {
  const result = s
    .split("")
    .reduce((acc, cur) => {
      const pop = acc[acc.length - 1];
      if (cur === pop) acc.pop();
      else acc.push(cur);
      return acc;
    }, [])
    .join("");

  return result === "" ? 1 : 0;
};

describe("3", () => {
  test(`solution`, () => {
    expect(solution("ABBA")).toEqual(1);
  });
});
