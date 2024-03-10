const solution = (s) => {
  const exp = s.replaceAll(" ", "");
  const ops = ["+", "-", "*", "/"];
  const opPriority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const opStack = [];
  const print = [];

  for (let i = 0; i < exp.length; i++) {
    if (ops.includes(exp[i])) {
      const op = exp[i];
      if (opStack.length === 0) {
        opStack.push(op);
        continue;
      }

      const lastOp = opStack[opStack.length - 1];
      if (lastOp === "(") {
        opStack.push(op);
        continue;
      }

      while (opPriority[opStack[opStack.length - 1]] >= opPriority[op]) {
        if (opStack.length <= 0) break;
        print.push(opStack.pop());
      }

      opStack.push(op);
      continue;
    }

    if (exp[i] === "(") {
      opStack.push("(");
      continue;
    }

    if (exp[i] === ")") {
      while (opStack[opStack.length - 1] !== "(") {
        print.push(opStack.pop());
      }

      opStack.pop();
      continue;
    }

    print.push(exp[i]);
  }

  return [...print, ...opStack.reverse()].join(" ");
};

describe("5", () => {
  test(`solution`, () => {
    expect(solution("( 3 + 5 * ( 4 - 6 ) / 2 )")).toEqual("3 5 4 6 - * 2 / +");
    expect(solution("1 + 2 * 3 * ( 2 + 3 )")).toEqual("1 2 3 * 2 3 + * +");
  });
});
