const solution = (str1, str2) => {
  return [...str2].reduce(
    (acc, cur) => {
      if (acc[0] === cur) acc.shift();
      return acc;
    },
    [...str1]
  ).length === 0
    ? "YES"
    : "NO";
};

describe("교육과정설계", () => {
  test(`solution`, () => {
    expect(solution("CBA", "CBDAGE")).toEqual("YES");
    expect(solution("CBA", "CGEADB")).toEqual("NO");
  });
});
