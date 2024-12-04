function decodeString(s: string): string {
  const numStack: number[] = [];
  const strStack: string[] = [];

  let currentNum = "";
  let currentStr = "";

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    // 숫자인 경우
    if (/\d/.test(cur)) {
      currentNum += cur;
    }

    // 문자인 경우
    if (/[a-z]/.test(cur)) {
      currentStr += cur;
    }

    // 여는 괄호
    if (cur === "[") {
      numStack.push(Number(currentNum));
      strStack.push(currentStr);
      currentNum = "";
      currentStr = "";
    }

    // 닫는 괄호
    if (cur === "]") {
      const repeatTimes = numStack.pop()!;
      const previousString = strStack.pop()!;
      currentStr = previousString + currentStr.repeat(repeatTimes);
    }
  }

  return currentStr;
}

test("solution", () => {
  expect(decodeString("3[a2[c]]")).toBe("accaccacc");
});
