const solution = (s) => {
  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };

  const open = ["(", "{", "[", "<"];

  const result = s.split("").reduce((acc, cur) => {
    if (open.includes(cur)) {
      acc.push(cur);
      return acc;
    }

    if (acc.length > 0 && acc[acc.length - 1] === pair[cur]) {
      acc.pop();
      return acc;
    }

    return acc;
  }, []);

  return result.length === 0 ? 1 : 0;
};

describe("2", () => {
  test(`solution`, () => {
    expect(solution("(()){[<>]}")).toEqual(1);
    expect(solution("({)}[<]>")).toEqual(0);
  });
});
