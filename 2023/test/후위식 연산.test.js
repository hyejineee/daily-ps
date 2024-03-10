const solution = (str) => {
  return [...str].reduce((acc, cur) => {
    if (!isNaN(Number(cur))) {
      acc.push(Number(cur));
    } else {
      const n2 = acc.pop();
      const n1 = acc.pop();

      acc.push(calculate(n1, n2, cur));
    }

    return acc;
  }, [])[0];
};

const calculate = (n1, n2, op) => {
  if (op === "+") return n1 + n2;
  if (op === "*") return n1 * n2;
  if (op === "-") return n1 - n2;
  return Math.floor(n1 / n2);
};

describe("후위식 연산", () => {
  test(`solution`, () => {
    expect(solution("352+*9-")).toEqual(12);
  });
});
