const solution = (str) => {
  return [...str].reduce(
    (acc, cur) => {
      if (cur === "(") acc[0]++;
      if (cur === ")") acc[0]--;

      if (acc[0] <= 0 && !(cur === "(" || cur === ")")) {
        acc[1] += cur;
      }

      return acc;
    },
    [0, ""]
  )[1];
};

describe("괄호문자 제거", () => {
  test(`solution`, () => {
    expect(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")).toEqual("EFLM");
  });
});
