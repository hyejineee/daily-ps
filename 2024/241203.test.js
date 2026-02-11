function decodeString(s) {
  const numStack = [];
  const strStack = [];

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
      const repeatTimes = numStack.pop();
      const previousString = strStack.pop();
      // 반복이 어떤 식으로 진행되는지 파악하는 것이 핵심. 이전 상태와 다음 상태가 어떻게 결합되는지.
      currentStr = previousString + currentStr.repeat(repeatTimes);
    }
  }

  return currentStr;
}

test("solution", () => {
  expect(decodeString("3[a2[c]]")).toBe("accaccacc");
});
